import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen, DetailScreen } from '../screens';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Detail' component={DetailScreen} />
    </Stack.Navigator>
  );
}
