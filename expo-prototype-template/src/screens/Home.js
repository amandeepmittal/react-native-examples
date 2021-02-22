import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={RNLogo} />
      <Text>Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 100,
    height: 100
  }
});

export default Home;
