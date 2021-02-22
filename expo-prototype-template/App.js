import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';

import loadAssetAsync from './src/constants/CacheAssets';
import RootNavigator from './src/navigation/RootNavigator';

export default function App() {
  const [assetsLoading, setAssetsLoading] = useState(true);

  if (assetsLoading) {
    return (
      <AppLoading
        startAsync={loadAssetAsync}
        onFinish={setAssetsLoading(false)}
        onError={() => console.warn}
      />
    );
  }

  return (
    <>
      <StatusBar style='auto' />
      <RootNavigator />
    </>
  );
}
