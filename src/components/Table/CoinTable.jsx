import React, { useState } from 'react';
import CoinItem from './CoinItem';
import useFetch from '../../hooks/useFetch';
import Loading from '../Helper/Loading';
import Error from '../Helper/Error';
import { COINS_GET } from '../../api';
import * as S from '../styles/StyledCoinTable';

function CoinTable({ numCoins }) {
  const {
    loading, error, data, request,
  } = useFetch();
  const [width, setWidth] = useState(0);
  React.useEffect(() => {
    async function fetchCoins() {
      const { url } = COINS_GET();
      await request(url);
    }

    fetchCoins();
  }, [request]);

  React.useEffect(() => {
    function updateCurrentWidth() {
      const windowWidth = window.innerWidth;
      setWidth(windowWidth);
    }

    updateCurrentWidth();
    window.addEventListener('resize', updateCurrentWidth);

    return () => window.removeEventListener('resize', updateCurrentWidth);
  }, []);

  function ordenaLista(lista) {
    return lista.sort(({ market_cap_rank: a }, { market_cap_rank: b }) => a - b);
  }

  return (
    <S.TableWrapper>
      <S.TableHeader>
        <span>Name</span>
        <S.Symbol>Symbol</S.Symbol>
        <span>Price</span>
        <span>Change (24h)</span>
        <S.Volume>Total Volume</S.Volume>
      </S.TableHeader>
      <S.TableContentWrapper>
        {loading ? (
          <Loading />
        ) : (
          <S.TableContent>
            {data
              && ordenaLista(data)
                .slice(0, numCoins)
                .map((coin) => <CoinItem key={coin.id} data={coin} mobile={width <= 980} />)}
          </S.TableContent>
        )}
      </S.TableContentWrapper>
      {error && <Error error={error} />}
    </S.TableWrapper>
  );
}

export default CoinTable;
