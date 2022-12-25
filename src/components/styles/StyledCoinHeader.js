import styled from 'styled-components';

export const CoinHeader = styled.div`
  display: grid;
  grid-template-columns: 2rem auto auto auto 1fr;
  gap: 1.25rem;
  align-items: center;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.contentBackground};
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.detail};
  box-shadow: 1px 2px 5px 0px rgba(0, 0, 0, 0.2);

  @media (max-width: 1225px) {
    grid-template-columns: ${({ frontPage }) => (frontPage ? '2rem auto 1fr' : '2rem auto auto auto 1fr')};
  }

  @media (max-width: ${({ frontPage }) => (frontPage ? '880px' : '465px')}) {
    gap: 0.5rem;
  }

  @media (max-width: 600px) {
    grid-template-columns: 2rem auto 1fr;
  }
`;

export const CoinPrice = styled.span`
  font-size: 1.25rem;

  @media (max-width: ${({ frontPage }) => (frontPage ? '880px' : '465px')}) {
    font-size: 1rem;
  }
`;

export const CoinChange = styled.span`
  font-size: 0.875rem;
  color: ${({ change }) => (change < 0 ? '#cd001e' : '#37b008')};

  @media (max-width: ${({ frontPage }) => (frontPage ? '880px' : '465px')}) {
    font-size: 1rem;
  }
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

  @media (max-width: ${({ frontPage }) => (frontPage ? '880px' : '465px')}) {
    font-size: 1.5rem;
  }
`;

export const CoinSymbol = styled.span`
  font-size: 2rem;
  font-weight: 700;
  line-height: 1;

  @media (max-width: ${({ frontPage }) => (frontPage ? '880px' : '625px')}) {
    font-size: 1.5rem;
  }
`;

export const PricesWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;
