import styled from 'styled-components';

export const StatsWrapper = styled.div`
  display: grid;
  width: 100%;
  gap: 0.5rem;
  grid-template-columns: ${({ frontPage }) => (frontPage ? 'initial' : '1fr 2fr')};
  margin-top: 1rem;

  @media (max-width: 690px) {
    grid-template-columns: ${({ frontPage }) => (!frontPage ? 'initial' : '')};
  }
`;

export const StatsList = styled.ul`
  display: grid;
  grid-template-columns: ${({ frontPage }) => (frontPage ? '1fr 1fr 1fr' : 'initial')};
  gap: 0.5rem;

  @media (max-width: 1225px) {
    grid-template-columns: initial;
  }
`;

export const CoinStat = styled.li`
  background-color: ${({ theme }) => theme.colors.contentBackground};
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.detail};
  box-shadow: 1px 2px 5px 0px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  display: grid;
  align-content: flex-start;
  gap: 0.5rem;
`;
