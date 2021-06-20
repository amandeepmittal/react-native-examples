import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useAppearance } from '../hooks';
import { Button } from '../components';

export default function HomeScreen({ navigation }) {
  const theme = useAppearance();
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <Text style={{ paddingBottom: 10, color: theme.text }}>
        Home Screen Placeholder
      </Text>
      <Button
        title='Go to Detail screen'
        onPress={() => navigation.navigate('Detail')}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16
  }
});
