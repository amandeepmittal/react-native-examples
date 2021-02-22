import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { Twitter, Instagram } from '../../assets/images';

const Settings = () => {
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: colors.text }]}>Settings</Text>
      <View style={styles.contentContainer}>
        <View style={styles.listItemContainer}>
          <Twitter width={50} height={50} />
          <Instagram width={50} height={50} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    alignSelf: 'flex-end'
  },
  contentContainer: {
    marginTop: 20
  },
  listItemContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  }
});

export default Settings;
