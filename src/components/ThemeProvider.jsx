import React, { useEffect } from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import useWindowSize from './hooks/useWindowSize';
import ThemeToggler from './ThemeToggler';
import MobileWarning from './MobileWarning';

const ThemeProvider = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const { width } = useWindowSize();

  useEffect(() => {
    if (width < 768) {
      setTheme('light'); // Force light theme on mobile
    }
  }, [width, setTheme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={theme}>
      <div className="container">
        <h1>{theme === 'light' ? 'Light Theme' : 'Dark Theme'}</h1>
        {width >= 768 ? (
          <ThemeToggler toggleTheme={toggleTheme} />
        ) : (
          <MobileWarning />
        )}
      </div>
    </div>
  );
};

export default ThemeProvider;
