import React from 'react';
import { StyleSheet, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { colors } from '../constants';
import { useAppearance } from '../hooks';

export default function DetailScreen({ navigation }) {
  const theme = useAppearance();
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <Text style={{ color: theme.text }}>Detail Screen Placeholder</Text>
      <Button
        title='Go back'
        color={colors.primary}
        onPress={() => navigation.navigate('Home')}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
