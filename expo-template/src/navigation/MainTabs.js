import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';

import HomeStack from './HomeStack';
import { DemoScreen } from '../screens';
import { theme } from '../constants';

const Tab = createBottomTabNavigator();

const TabIcons = ({ route, color, size }) => {
  let iconName;

  if (route.name === 'Home') {
    iconName = 'home';
  }

  if (route.name === 'Demo') {
    iconName = 'rocket';
  }

  return <AntDesign name={iconName} color={color} size={size} />;
};

export default function MainTabs() {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          }

          if (route.name === 'Demo') {
            iconName = 'rocket1';
          }

          return <AntDesign name={iconName} color={color} size={size} />;
        },
        tabBarActiveTintColor: theme.primary,
        tabBarInactiveTintColor: theme.divider
      })}
    >
      <Tab.Screen name='Home' component={HomeStack} />
      <Tab.Screen name='Demo' component={DemoScreen} />
    </Tab.Navigator>
  );
}
