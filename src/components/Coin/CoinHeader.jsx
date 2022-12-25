import React from 'react';
import * as S from '../styles/StyledCoinHeader';

function CoinHeader({ coinData }) {
  const {
    name,
    symbol,
    image: { small: icon },
    market_data: {
      current_price: { usd: price },
      price_change_percentage_24h: change,
    },
  } = coinData;
  return (
    <S.CoinHeader>
      <S.CoinIcon src={icon} alt="" />
      <S.CoinName>{name}</S.CoinName>
      <S.CoinSymbol>
        (
        {symbol.toUpperCase()}
        )
      </S.CoinSymbol>
      <S.CoinPrice>
        {price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
      </S.CoinPrice>
      <S.CoinChange change={change}>{change > 0 ? `+${change}%` : `${change}%`}</S.CoinChange>
    </S.CoinHeader>
  );
}

export default CoinHeader;
