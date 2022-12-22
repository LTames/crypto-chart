import React from 'react';
import { lightTheme, darkTheme } from './styles/Themes';

export const ThemeContext = React.createContext();

export function ThemeStorage({ children }) {
  const [theme, setTheme] = React.useState(lightTheme);

  function toggleTheme() {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}
