import React from 'react';
import * as S from './styles/StyledHeader';
import { ReactComponent as Coin } from '../assets/btc.svg';
import { ReactComponent as Home } from '../assets/home.svg';
import { ReactComponent as Bookmark } from '../assets/bookmark.svg';
import { ReactComponent as Moon } from '../assets/moon.svg';
import { ReactComponent as Sun } from '../assets/sun.svg';
import { ThemeContext } from '../ThemeContext';

function Header() {
  const { theme, toggleTheme } = React.useContext(ThemeContext);

  return (
    <S.Header>
      <nav>
        <S.LinkList>
          <li>
            <S.Link to="/" end>
              <Home fill={theme.colors.icon} />
              Home
            </S.Link>
          </li>
          <li>
            <S.Link to="coins">
              <Coin fill={theme.colors.icon} />
              Coins
            </S.Link>
          </li>
        </S.LinkList>
      </nav>

      <S.ButtonsWrapper>
        <S.IconButton>
          <Bookmark fill={theme.colors.icon} />
        </S.IconButton>
        <S.IconButton onClick={() => toggleTheme()}>
          {theme.name === 'light' ? <Sun /> : <Moon />}
        </S.IconButton>
      </S.ButtonsWrapper>
    </S.Header>
  );
}

export default Header;
