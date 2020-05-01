import React, { useContext } from 'react';
import { Alert } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { IconButton } from 'react-native-paper';
import HomeScreen from '../screens/HomeScreen';
import AddRoomScreen from '../screens/AddRoomScreen';
import RoomScreen from '../screens/RoomScreen';
import { AuthContext } from './AuthProvider';

const ChatAppStack = createStackNavigator();
const ModalStack = createStackNavigator();

/**
 * All chat app related screens
 */

function ChatApp() {
  const { logout } = useContext(AuthContext);

  return (
    <ChatAppStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#6646ee'
        },
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontSize: 22
        }
      }}
    >
      <ChatAppStack.Screen
        name='Home'
        component={HomeScreen}
        options={({ navigation }) => ({
          headerRight: () => (
            <IconButton
              icon='message-plus'
              size={28}
              color='#ffffff'
              onPress={() => navigation.navigate('AddRoom')}
            />
          ),
          headerLeft: () => (
            <IconButton
              icon='logout-variant'
              size={28}
              color='#ffffff'
              onPress={() => logout()}
            />
          )
        })}
      />
      <ChatAppStack.Screen
        name='Room'
        component={RoomScreen}
        options={({ route }) => ({
          title: route.params.thread.name
        })}
      />
    </ChatAppStack.Navigator>
  );
}

export default function HomeStack() {
  return (
    <ModalStack.Navigator mode='modal' headerMode='none'>
      <ModalStack.Screen name='ChatApp' component={ChatApp} />
      <ModalStack.Screen name='AddRoom' component={AddRoomScreen} />
    </ModalStack.Navigator>
  );
}
