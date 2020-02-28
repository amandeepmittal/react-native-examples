import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import ChatRoom from '../screens/ChatRoom.js'

const Stack = createStackNavigator()

export default function SignInStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='ChatRoom'
          component={ChatRoom}
          options={{ title: 'Chat Room' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
