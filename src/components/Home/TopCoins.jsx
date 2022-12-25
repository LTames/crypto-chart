import React from 'react';
import StyledTitle from '../styles/shared/StyledTitle';
import CoinTable from '../Table/CoinTable';
import * as S from '../styles/StyledTopCoins';

function TopCoins() {
  return (
    <section>
      <S.HeaderWrapper>
        <StyledTitle>Top 10 Crypto</StyledTitle>
        <S.SeeAllLink to="/coins">See All</S.SeeAllLink>
      </S.HeaderWrapper>
      <CoinTable numCoins={10} />
    </section>
  );
}

export default TopCoins;
