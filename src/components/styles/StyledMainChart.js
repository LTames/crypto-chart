import styled from 'styled-components';

export const Chart = styled.div`
  width: 100%;

  > div {
    background-color: ${({ theme }) => theme.colors.contentBackground};
    border-radius: 0.5rem;
    padding: 1rem;
  }
`;
