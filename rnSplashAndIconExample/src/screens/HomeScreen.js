import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.title}>Home Screen</Text>
      <Pressable
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('Details')}>
        <Text style={styles.buttonTextStyle}>Go To Detail Screen</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
  },
  buttonStyle: {
    height: 54,
    width: '80%',
    marginTop: 32,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2EE59D',
    shadowRadius: 5,
    shadowOpacity: 0.7,
    shadowColor: 'rgba(46, 229, 157, 0.5)',
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  buttonTextStyle: {
    color: '#fdfdfd',
    fontWeight: '700',
  },
});

export default HomeScreen;
