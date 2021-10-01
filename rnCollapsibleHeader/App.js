import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { BooksScreen } from './src/screens/BooksScreen';

const App = () => {
  return (
    <SafeAreaProvider>
      <BooksScreen />
    </SafeAreaProvider>
  );
};

export default App;
