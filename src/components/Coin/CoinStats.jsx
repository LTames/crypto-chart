import React from 'react';
import { useParams } from 'react-router-dom';
import * as S from '../styles/StyledCoinStats';
import MainChart from './MainChart';
import useFetch from '../../hooks/useFetch';
import CoinHeader from './CoinHeader';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import { COIN_GET } from '../../api';
import StyledTitle from '../styles/shared/StyledTitle';

function CoinStats({ coinId, frontPage }) {
  const {
    loading, error, request, data,
  } = useFetch();
  const { id } = useParams();

  React.useEffect(() => {
    async function fetchCoinData() {
      const { url } = COIN_GET(coinId ?? id);
      await request(url);
    }

    fetchCoinData();
  }, [request, id, coinId]);

  function formatCurrency(value) {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  }

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  return (
    data && (
      <section>
        <CoinHeader coinData={data} />
        <StyledTitle>Coin Stats</StyledTitle>
        <S.StatsWrapper frontPage={frontPage}>
          <S.StatsList frontPage={frontPage}>
            <S.CoinStat>
              <h3>All-Time High</h3>
              <span>{formatCurrency(data.market_data.ath.usd)}</span>
            </S.CoinStat>
            <S.CoinStat>
              <h3>Volume</h3>
              <span>{formatCurrency(data.market_data.total_volume.usd)}</span>
            </S.CoinStat>
            <S.CoinStat>
              <h3>Market Cap</h3>
              <span>{formatCurrency(data.market_data.market_cap.usd)}</span>
            </S.CoinStat>
          </S.StatsList>
          <MainChart coinId={coinId ?? id} />
        </S.StatsWrapper>
      </section>
    )
  );
}

export default CoinStats;
