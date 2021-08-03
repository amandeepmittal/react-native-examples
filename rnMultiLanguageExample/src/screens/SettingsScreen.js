import React from 'react';
import { View } from 'react-native';

import Selector from '../components/LanguageSelector';

export default function SettingsScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <Selector />
    </View>
  );
}
