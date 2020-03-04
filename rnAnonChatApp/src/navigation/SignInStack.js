import * as React from 'react'
import { TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Icon from 'react-native-vector-icons/Ionicons'
import auth from '@react-native-firebase/auth'
import ChatRoom from '../screens/ChatRoom.js'

const Stack = createStackNavigator()

export default function SignInStack() {
  async function logOut() {
    try {
      await auth().signOut()
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='ChatRoom'
          component={ChatRoom}
          options={{
            title: 'Chat Room',
            headerRight: () => (
              <TouchableOpacity style={{ marginRight: 10 }} onPress={logOut}>
                <Icon name='ios-log-out' size={30} color='#444' />
              </TouchableOpacity>
            )
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
