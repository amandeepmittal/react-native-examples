import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// screens
import Home from '../screens/Home';
import Secondary from '../screens/Secondary';

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={Home}>
      <Stack.Screen
        name='Home'
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen name='Secondary' component={Secondary} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
