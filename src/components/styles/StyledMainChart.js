import styled from 'styled-components';

export const Chart = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.detail};
  box-shadow: 1px 2px 5px 0px rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;

  > div {
    background-color: ${({ theme }) => theme.colors.contentBackground};
    border-radius: 0.5rem;
    padding: 0.375rem 1rem 1rem 0.375rem;
  }
`;
