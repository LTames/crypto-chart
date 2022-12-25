import React from 'react';
import * as S from '../styles/StyledCoinHeader';

function CoinHeader({ coinData, frontPage }) {
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
    <S.CoinHeader frontPage={frontPage}>
      <S.CoinIcon src={icon} alt="" />
      <S.CoinName frontPage={frontPage}>{name}</S.CoinName>
      <S.CoinSymbol frontPage={frontPage}>
        (
        {symbol.toUpperCase()}
        )
      </S.CoinSymbol>
      <S.PricesWrapper>
        <S.CoinPrice>
          {price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
        </S.CoinPrice>
        <S.CoinChange change={change}>{change > 0 ? `+${change}%` : `${change}%`}</S.CoinChange>
      </S.PricesWrapper>
    </S.CoinHeader>
  );
}

export default CoinHeader;
