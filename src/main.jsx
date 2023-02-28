import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeStorage } from './ThemeContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeStorage>
    <App />
  </ThemeStorage>,
);
