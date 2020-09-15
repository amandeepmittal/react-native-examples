import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './screens/Login';
import Home from './screens/Home';
import SignUp from './screens/SignUp';

const Main = createStackNavigator();

const MainNavigator = () => {
  return (
    <Main.Navigator headerMode='none'>
      <Main.Screen name='Login' component={Login} />
      <Main.Screen name='SignUp' component={SignUp} />
      <Main.Screen name='Home' component={Home} />
    </Main.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
}
