import React from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { RNLogo } from '../../assets/images';

const Home = ({ navigation }) => {
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      <Text style={{ color: colors.text }}>Home Screen</Text>
      <Pressable onPress={() => navigation.navigate('Secondary')}>
        <Text style={[styles.buttonText, { color: colors.border }]}>
          Go to Secondary
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    marginTop: 20
  }
});

export default Home;
