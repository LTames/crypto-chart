import React from 'react';
import Chart from 'react-apexcharts';
import useFetch from '../../hooks/useFetch';
import { COIN_CHART_DATA_GET } from '../../api';
import Loading from '../Helper/Loading';
import * as S from '../styles/StyledMainChart';
import Error from '../Helper/Error';
import { ThemeContext } from '../../ThemeContext';

function MainChart({ coinId }) {
  const { loading, error, request } = useFetch();
  const [series, setSeries] = React.useState(null);
  const { theme } = React.useContext(ThemeContext);
  const options = {
    chart: {
      width: '100%',
      height: '100%',
      type: 'candlestick',
      toolbar: {
        show: false,
        autoSelected: 'zoom',
      },
    },
    grid: {
      show: true,
      borderColor: theme.colors.detail,
      strokeDashArray: 0,
      position: 'back',
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    tooltip: {
      enabled: true,
      theme: theme.name,
    },

    xaxis: {
      type: 'datetime',
      labels: {
        style: {
          colors: theme.colors.text,
        },
        datetimeFormatter: {
          year: 'yyyy',
          month: "MMM 'yy",
          day: 'dd MMM',
        },
      },
    },

    yaxis: {
      tooltip: {
        enabled: true,
      },
      labels: {
        style: {
          colors: theme.colors.text,
        },
      },
    },
  };

  React.useEffect(() => {
    async function fetchData() {
      const { url } = COIN_CHART_DATA_GET(coinId);
      const { json } = await request(url);

      setSeries([
        {
          name: 'candle',
          data: json.map(([date, ...ohlc]) => ({
            x: new Date(date),
            y: ohlc,
          })),
        },
      ]);
    }

    fetchData();
  }, [request, coinId]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  return (
    <S.Chart>{series && <Chart options={options} series={series} type="candlestick" />}</S.Chart>
  );
}

export default MainChart;
