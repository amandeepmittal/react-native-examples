import * as React from 'react'
import { TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Icon from 'react-native-vector-icons/Ionicons'
import auth from '@react-native-firebase/auth'
import ChatRoom from '../screens/ChatRoom.js'
import CreateChatRoom from '../screens/CreateChatRoom'
import Messages from '../screens/Messages'

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
          options={({ navigation }) => ({
            title: 'Chat Room',
            headerLeft: () => (
              <TouchableOpacity
                style={{ marginLeft: 10 }}
                onPress={() => navigation.navigate(CreateChatRoom)}>
                <Icon name='ios-add' size={30} color='#444' />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity style={{ marginRight: 10 }} onPress={logOut}>
                <Icon name='ios-log-out' size={30} color='#444' />
              </TouchableOpacity>
            )
          })}
        />
        <Stack.Screen
          name='CreateChatRoom'
          component={CreateChatRoom}
          options={{
            title: 'Create a room'
          }}
        />
        <Stack.Screen
          name='Messages'
          component={Messages}
          options={{
            title: 'Messages'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
