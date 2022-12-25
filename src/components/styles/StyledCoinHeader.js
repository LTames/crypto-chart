import styled from 'styled-components';

export const CoinHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.contentBackground};
  border-radius: 0.5rem;
`;

export const CoinPrice = styled.span`
  font-size: 1.25rem;
`;

export const CoinChange = styled.span`
  font-size: 0.875rem;
  color: ${({ change }) => (change < 0 ? '#cd001e' : '#37b008')};
`;

export const CoinIcon = styled.img`
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
  overflow: hidden;
`;

export const CoinName = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  line-height: 1;
`;

export const CoinSymbol = CoinName.withComponent('span');
