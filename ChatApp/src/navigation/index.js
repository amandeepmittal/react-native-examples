import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import LoginScreen from '../screens/LoginScreen';

/**
 * Wrap all providers here
 */

export default function Providers() {
  return (
    <PaperProvider>
      <LoginScreen />
    </PaperProvider>
  );
}
