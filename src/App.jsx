import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './components/styles/global/GlobalStyle';
import { ThemeContext } from './ThemeContext';
import Container from './components/styles/shared/StyledContainer';
import Header from './components/Header';
import Home from './components/Home/Home';
import CoinTable from './components/Table/CoinTable';
import CoinStats from './components/Coin/CoinStats';

function App() {
  const { theme } = React.useContext(ThemeContext);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Container>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="coins" element={<CoinTable />} />
              <Route path="coin/:id" element={<CoinStats />} />
            </Routes>
          </main>
        </Container>
        <div className="stars" />
        <div className="stars2" />
        <div className="stars3" />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
