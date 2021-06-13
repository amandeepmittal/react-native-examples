import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { theme } from '../constants';
import { Button } from '../components';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home Screen Placeholder</Text>
      <Button
        title='Go to Detail screen'
        onPress={() => navigation.navigate('Detail')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16
  }
});
