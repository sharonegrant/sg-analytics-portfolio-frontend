import React from 'react';
import theme from './theme';

const ThemeContext = React.createContext(theme);

export const ThemeProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
