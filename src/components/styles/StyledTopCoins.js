import styled from 'styled-components';

export const Title = styled.h2`
  font-weight: 700;
  margin-bottom: 2rem;
`;

export const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  margin-bottom: 1rem;
  font-size: 0.875rem;
  font-weight: 300;
`;

export const TableWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.contentBackground};
  border-radius: 0.5rem;
  padding: 0.75rem 1.5rem;
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
