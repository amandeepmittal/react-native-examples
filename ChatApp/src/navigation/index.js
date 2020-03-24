import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import Routes from './Routes';

/**
 * Wrap all providers here
 */

export default function Providers() {
  return (
    <PaperProvider>
      <Routes />
    </PaperProvider>
  );
}
