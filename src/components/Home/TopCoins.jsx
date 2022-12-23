import React from 'react';
import { COINS_GET } from '../../api';
import CoinItem from './CoinItem';
import * as S from '../styles/StyledTopCoins';
import useFetch from '../../hooks/useFetch';
import Loading from '../Helper/Loading';
import Error from '../Helper/Error';

function TopCoins() {
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

  return (
    <section>
      <S.Title>Top Coins</S.Title>
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
              {data && data.map((coin) => <CoinItem key={coin.id} data={coin} />)}
            </S.TableContent>
          )}
        </S.TableContentWrapper>
        {error && <Error error={error} />}
      </S.TableWrapper>
    </section>
  );
}

export default TopCoins;
