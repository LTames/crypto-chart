import React from 'react';
import { lightTheme, darkTheme } from './components/styles/global/Themes';

export const ThemeContext = React.createContext();

export function ThemeStorage({ children }) {
  const [theme, setTheme] = React.useState(
    localStorage.getItem('theme') === 'light' ? lightTheme : darkTheme,
  );

  function toggleTheme() {
    const newTheme = theme === lightTheme ? darkTheme : lightTheme;
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme.name);
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}
