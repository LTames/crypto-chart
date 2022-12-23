import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Coin = styled.li`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  padding: 0.875rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.detail};
  align-items: center;
`;

export const CoinRankWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.75rem auto 1fr;
`;

export const CoinRank = styled.span`
  display: block;
  justify-self: center;
`;

export const CoinLink = styled(Link)`
  color: ${({ theme }) => theme.colors.link};

  &:hover {
    color: ${({ theme }) => theme.colors.linkHover};
  }
`;

export const CoinNumericValue = styled.span`
  font-size: 0.875rem;
`;

export const CoinChange = styled(CoinNumericValue)`
  color: ${({ change }) => (change < 0 ? '#cd001e' : '#37b008')};
`;

export const CoinIcon = styled.img`
  margin: 0rem 1.5rem 0rem 1.25rem;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  overflow: hidden;
`;
