import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';

const Settings = () => {
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: colors.text }]}>Settings</Text>
      <View style={styles.contentContainer}>
        <Text style={[styles.listHeading, { color: colors.text }]}>
          General Settings
        </Text>
        <View style={styles.listItemContainer}>
          <Text style={[styles.listItemText, { color: colors.text }]}>
            Select Theme
          </Text>
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
  listHeading: {
    fontWeight: 'bold',
    fontSize: 20
  },
  listItemContainer: {
    marginTop: 10,
    flexDirection: 'row'
  },
  listItemText: {
    fontSize: 18
  }
});

export default Settings;
