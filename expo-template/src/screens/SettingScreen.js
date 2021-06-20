import React, { useContext } from 'react';
import { StyleSheet, Text, Switch, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { ThemeContext } from '../contexts/ThemeProvider';
import { useAppearance } from '../hooks';

export default function SettingScreen() {
  const { mode, setMode } = useContext(ThemeContext);
  const theme = useAppearance();

  const handleDarkModeAppearanceChange = newValue => {
    const newMode = newValue ? 'dark' : 'light';
    setMode(newMode);
    AsyncStorage.setItem('@theme', newMode);
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <Text style={[styles.headerText, { color: theme.text }]}>Settings</Text>
      <View style={styles.generalSettingsContainer}>
        <Text style={[styles.text, { color: theme.text }]}>
          Dark Appearance
        </Text>
        <Switch
          value={mode === 'dark'}
          onValueChange={handleDarkModeAppearanceChange}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16
  },
  headerText: {
    fontSize: 32,
    fontWeight: '700'
  },
  generalSettingsContainer: {
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  text: {
    fontSize: 20
  }
});
