import React from 'react';
import * as S from '../styles/StyledCoinItem';

function CoinItem({ data, mobile }) {
  const {
    id,
    symbol,
    name,
    image: icon,
    market_cap_rank: rank,
    current_price: priceUSD,
    price_change_percentage_24h: change,
    total_volume: volume,
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
        <S.CoinLink to={`/coin/${id}`}>{mobile ? symbol.toUpperCase() : name}</S.CoinLink>
      </S.CoinRankWrapper>
      <S.CoinSymbol>{symbol.toUpperCase()}</S.CoinSymbol>
      <S.CoinPrice>{convertCurrency(priceUSD)}</S.CoinPrice>
      <S.CoinChange change={change}>
        {`${change > 0 ? '+' : ''}${change.toFixed(3)}`}
        %
      </S.CoinChange>
      <S.CoinVolume>{convertCurrency(volume)}</S.CoinVolume>
    </S.Coin>
  );
}

export default CoinItem;
