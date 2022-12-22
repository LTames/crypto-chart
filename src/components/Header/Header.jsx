import React from 'react';
import * as S from '../../styles/Header/Header';
import { ReactComponent as Coin } from '../../assets/btc.svg';
import { ReactComponent as Home } from '../../assets/home.svg';
import { ThemeContext } from '../../ThemeContext';

function Header() {
  const { theme, toggleTheme } = React.useContext(ThemeContext);

  return (
    <S.Header>
      <nav>
        <S.LinkList>
          <li>
            <S.Link to="/" end>
              Home
              <Home fill={theme.colors.icon} />
            </S.Link>
          </li>
          <li>
            <S.Link to="coins">
              Coins
              <Coin fill={theme.colors.icon} />
            </S.Link>
          </li>
        </S.LinkList>
      </nav>

      <div>
        <button onClick={() => toggleTheme()}>
          aaaa
          <img src="" alt="" />
        </button>
        <button>
          <img src="" alt="" />
        </button>
      </div>
    </S.Header>
  );
}

export default Header;
