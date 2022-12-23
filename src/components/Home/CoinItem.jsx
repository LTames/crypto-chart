import React from 'react';
import * as S from '../styles/StyledCoinItem';

function CoinItem({ data }) {
  const {
    id,
    symbol,
    name,
    image: { small: icon },
    market_data: {
      market_cap_rank: rank,
      current_price: { usd: priceUSD },
      price_change_percentage_24h: change,
      total_volume: { usd: volume },
    },
  } = data;

  function convertCurrency(value) {
    return value.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      currencyDisplay: 'symbol',
    });
  }

  return (
    <S.Coin>
      <S.CoinRankWrapper>
        <S.CoinRank>{rank}</S.CoinRank>
        <S.CoinIcon src={icon} alt="" />
        <S.CoinLink to={`/coins/${id}`}>{name}</S.CoinLink>
      </S.CoinRankWrapper>
      <span>{symbol.toUpperCase()}</span>
      <S.CoinNumericValue>{convertCurrency(priceUSD)}</S.CoinNumericValue>
      <S.CoinChange change={change}>
        {`${change > 0 ? '+' : ''}${change.toFixed(2)}`}
        %
      </S.CoinChange>
      <S.CoinNumericValue>{convertCurrency(volume)}</S.CoinNumericValue>
    </S.Coin>
  );
}

export default CoinItem;
