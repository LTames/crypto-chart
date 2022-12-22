import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeContext } from './ThemeContext';
import Container from './styles/shared/Container';
import Header from './components/Header/Header';

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
              <Route path="" element="" />
              <Route path="" element="" />
              <Route path="" element="" />
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
