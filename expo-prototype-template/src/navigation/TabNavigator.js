import React from 'react';
import { useTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import custom Navigators
import HomeStackNavigator from './HomeStackNavigator';

// Import screens
import Settings from '../screens/Settings';

const BottomTab = createBottomTabNavigator();

const TabNavigator = () => {
  const { colors } = useTheme();
  return (
    <BottomTab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: colors.background
        },
        activeTintColor: colors.primary
      }}
    >
      <BottomTab.Screen name='Home' component={HomeStackNavigator} />
      <BottomTab.Screen name='Settings' component={Settings} />
    </BottomTab.Navigator>
  );
};

export default TabNavigator;
