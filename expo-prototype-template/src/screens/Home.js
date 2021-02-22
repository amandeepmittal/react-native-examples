import React from 'react';
import { View, StyleSheet, Text, Image, Pressable } from 'react-native';

import { RNLogo } from '../../assets/images';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={RNLogo} resizeMode='contain' />
      <Text>Home Screen</Text>
      <Pressable onPress={() => navigation.navigate('Secondary')}>
        <Text style={styles.buttonText}>Go to Secondary</Text>
      </Pressable>
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
  },
  buttonText: {
    marginTop: 20,
    color: 'red'
  }
});

export default Home;
