import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';

const FormStack = createStackNavigator();

function RootNavigator() {
  return (
    <NavigationContainer>
      <FormStack.Navigator>
        <FormStack.Screen name='Login' component={LoginScreen} />
        <FormStack.Screen name='Signup' component={SignupScreen} />
      </FormStack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
