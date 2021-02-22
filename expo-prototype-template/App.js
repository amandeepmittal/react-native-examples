import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { Twitter, Instagram } from './assets/images';

export default function App() {
  return (
    <>
      <StatusBar style='auto' />
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 10
          }}
        >
          <Twitter height={100} width={100} />
          <Instagram height={100} width={100} />
        </View>
        <Text>Open up App.js to start working on your app!</Text>
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
