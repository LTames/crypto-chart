import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  z-index: 10;
  padding: 1rem 0;
`;

export const LinkList = styled.ul`
  display: flex;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 10rem;
  border: 1px solid rgba(136, 0, 239, 0.5);
`;

export const Link = styled(NavLink)`
  min-width: 8rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;
  padding: 0.75rem 1rem;
  border-radius: 10rem;
  transition: background-color 100ms;

  &:hover {
    color: ${({ theme }) => theme.colors.linkHover};
  }

  &.active {
    background-color: ${({ theme }) => theme.colors.navLinkActive};
  }
`;
