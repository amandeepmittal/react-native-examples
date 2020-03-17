import React from 'react';
import {StatusBar} from 'react-native';
import AppTabs from './src/navigation/Navigator';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <AppTabs />
    </>
  );
};

export default App;
