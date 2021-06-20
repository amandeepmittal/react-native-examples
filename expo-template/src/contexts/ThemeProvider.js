import React, { createContext, useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { colors } from '../constants';

const ThemeContext = createContext({
  mode: 'light',
  setMode: () => {}
});

const ThemeProvider = ({ children }) => {
  const [themeState, setThemeState] = useState('light');

  const setMode = mode => setThemeState(mode);

  useEffect(() => {
    handleThemeChange();
  }, []);

  const handleThemeChange = async () => {
    try {
      const value = await AsyncStorage.getItem('@theme');

      if (value !== null) {
        setThemeState(value);
      } else {
        // fallback to light theme
        setThemeState('light');
      }
    } catch (e) {
      // fallback to light theme
      setThemeState('light');
    }
  };

  return (
    <ThemeContext.Provider value={{ mode: themeState, setMode }}>
      <StatusBar
        animated={true}
        barStyle={themeState === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={
          themeState === 'dark' ? colors.strong : colors.background
        }
      />
      <SafeAreaProvider
        style={{
          backgroundColor:
            themeState === 'dark' ? colors.strong : colors.background
        }}
      >
        {children}
      </SafeAreaProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
