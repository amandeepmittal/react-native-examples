import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen, DetailScreen } from '../screens';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='HomeScreen' component={HomeScreen} />
      <Stack.Screen name='DetailScreen' component={DetailScreen} />
    </Stack.Navigator>
  );
}
