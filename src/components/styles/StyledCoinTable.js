import styled from 'styled-components';

export const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  margin-bottom: 1rem;
  font-size: 0.875rem;
  font-weight: 300;

  @media (max-width: 980px) {
    grid-template-columns: 2fr 1fr 1fr;
  }

  @media (max-width: 460px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const TableWrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.contentBackground};
  border-radius: 0.5rem;
  padding: 1.25rem;
  border: 1px solid ${({ theme }) => theme.colors.detail};
  box-shadow: 1px 2px 10px 0px rgba(0, 0, 0, 0.2);
`;

export const TableContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TableContent = styled.ol`
  width: 100%;
`;

export const Symbol = styled.span`
  @media (max-width: 980px) {
    display: none;
  }
`;

export const Volume = styled.span`
  @media (max-width: 980px) {
    display: none;
  }
`;
