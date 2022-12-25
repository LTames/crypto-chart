import React from 'react';
import TopCoins from './TopCoins';
import CoinStats from '../Coin/CoinStats';
import * as S from '../styles/StyledHome';

function Home() {
  return (
    <>
      <S.Charts>
        <CoinStats frontPage coinId="bitcoin" />
        <CoinStats frontPage coinId="ethereum" />
      </S.Charts>
      <TopCoins />
    </>
  );
}

export default Home;
