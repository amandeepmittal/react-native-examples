import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'

const Stack = createStackNavigator()

function HomeStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Chat rooms' component={HomeScreen} />
    </Stack.Navigator>
  )
}

export default HomeStackNavigator
