import React from 'react';

import { ThemeProvider } from './src/contexts/ThemeProvider';
import RootNavigator from './src/navigation/RootNavigator';

export default function App() {
  return (
    <ThemeProvider>
      <RootNavigator />
    </ThemeProvider>
  );
}
