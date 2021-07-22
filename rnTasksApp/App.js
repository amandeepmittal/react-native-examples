import React from 'react';
import { NativeBaseProvider, StatusBar } from 'native-base';
import HomeScreen from './src/screens/HomeScreen';

function App() {
  return (
    <NativeBaseProvider>
      <StatusBar barStyle='light-content' />
      <HomeScreen />
    </NativeBaseProvider>
  );
}

export default App;
