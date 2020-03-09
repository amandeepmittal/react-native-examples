import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home.js'

const Stack = createStackNavigator()

export default function SignInStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Home Screen' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
