import React from 'react';
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

  React.useEffect(() => {
    async function fetchCoins() {
      const { url } = COINS_GET();
      await request(url);
    }

    fetchCoins();
  }, [request]);

  function ordenaLista(lista) {
    return lista.sort(
      ({ market_data: { market_cap_rank: a } }, { market_data: { market_cap_rank: b } }) => a - b,
    );
  }

  return (
    <S.TableWrapper>
      <S.TableHeader>
        <span>Name</span>
        <span>Symbol</span>
        <span>Price</span>
        <span>Change (24h)</span>
        <span>Total Volume</span>
      </S.TableHeader>
      <S.TableContentWrapper>
        {loading ? (
          <Loading />
        ) : (
          <S.TableContent>
            {data
              && ordenaLista(data)
                .slice(0, numCoins)
                .map((coin) => <CoinItem key={coin.id} data={coin} />)}
          </S.TableContent>
        )}
      </S.TableContentWrapper>
      {error && <Error error={error} />}
    </S.TableWrapper>
  );
}

export default CoinTable;
