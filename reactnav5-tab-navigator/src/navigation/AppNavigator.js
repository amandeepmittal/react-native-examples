import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

import Home from '../screens/Home'
import Detail from '../screens/Detail'
import Settings from '../screens/Settings'
import Profile from '../screens/Profile'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function MainTabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#101010',
        style: {
          backgroundColor: '#ffd700'
        }
      }}>
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='ios-home' color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name='Profile'
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='ios-person' size={size} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  )
}

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          gestureEnabled: true,
          headerStyle: {
            backgroundColor: '#101010'
          },
          headerTitleStyle: {
            fontWeight: 'bold'
          },
          headerTintColor: '#ffd700',
          headerBackTitleVisible: false
        }}
        headerMode='float'>
        <Stack.Screen name='Home' component={MainTabNavigator} />
        <Stack.Screen
          name='Detail'
          component={Detail}
          options={({ route }) => ({
            title: route.params.item.name
          })}
        />
        <Stack.Screen
          name='Settings'
          component={Settings}
          options={{ title: 'Settings' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStackNavigator
