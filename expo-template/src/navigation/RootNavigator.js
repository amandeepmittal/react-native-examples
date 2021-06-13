import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MainTabs from './MainTabs';

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <MainTabs />
    </NavigationContainer>
  );
}
