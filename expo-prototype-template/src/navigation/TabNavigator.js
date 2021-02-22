import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import custom Navigators
import HomeStackNavigator from './HomeStackNavigator';

// Import screens
import Settings from '../screens/Settings';

const BottomTab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name='Home' component={HomeStackNavigator} />
      <BottomTab.Screen name='Settings' component={Settings} />
    </BottomTab.Navigator>
  );
};

export default TabNavigator;
