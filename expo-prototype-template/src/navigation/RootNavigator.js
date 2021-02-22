import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';

// Current
import { CustomDarkTheme, CustomLightTheme } from '../constants/theme';

// Custom Navigator{s)
import TabNavigator from './TabNavigator';

const RootNavigator = () => {
  const scheme = useColorScheme();
  return (
    <AppearanceProvider>
      <NavigationContainer
        theme={scheme === 'dark' ? CustomDarkTheme : CustomLightTheme}
      >
        <TabNavigator />
      </NavigationContainer>
    </AppearanceProvider>
  );
};

export default RootNavigator;
