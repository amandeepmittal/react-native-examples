import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ChatRooms from '../screens/ChatRooms'

const Stack = createStackNavigator()

function HomeStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Chat Rooms' component={ChatRooms} />
    </Stack.Navigator>
  )
}

export default HomeStackNavigator
