import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import AppLoading from 'expo-app-loading';

import loadAssetAsync from './src/constants/CacheAssets';
import { RNLogo } from './assets/images';

export default function App() {
  const [assetsLoading, setAssetsLoading] = useState(false);

  if (assetsLoading) {
    return (
      <AppLoading
        startAsync={loadAssetAsync}
        onFinish={setAssetsLoading(true)}
        onError={() => console.warn}
      />
    );
  }

  return (
    <>
      <StatusBar style='auto' />
      <View style={styles.container}>
        <Image style={{ width: 50, height: 50 }} source={RNLogo} />
        <Text style={{}}>Open up App.js to start working on your app!</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
