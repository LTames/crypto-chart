import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding: 0 1.5rem;
`;

export const SeeAllLink = styled(Link)`
  color: ${({ theme }) => theme.colors.link};
  font-size: 0.875rem;
  &:hover {
    color: ${({ theme }) => theme.colors.linkHover};
  }
`;
