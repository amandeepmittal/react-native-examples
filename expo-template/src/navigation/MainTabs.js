import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';

import HomeStack from './HomeStack';
import { DemoScreen, SettingScreen } from '../screens';
import { colors } from '../constants';
import { useAppearance } from '../hooks';

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  const theme = useAppearance();

  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'HomeStack') {
            iconName = 'home';
          }

          if (route.name === 'Demo') {
            iconName = 'rocket1';
          }

          if (route.name === 'Settings') {
            iconName = 'setting';
          }

          return <AntDesign name={iconName} color={color} size={size} />;
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.divider,
        tabBarStyle: {
          backgroundColor: theme.background,
          borderTopColor: theme.background
        }
      })}
    >
      <Tab.Screen name='HomeStack' component={HomeStack} />
      <Tab.Screen name='Demo' component={DemoScreen} />
      <Tab.Screen name='Settings' component={SettingScreen} />
    </Tab.Navigator>
  );
}
