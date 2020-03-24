import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Title } from 'react-native-paper';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Title>Home Screen</Title>
      <Title>All chat rooms will be listed here</Title>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
