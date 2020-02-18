import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import ListScreen from '../screens/ListScreen'
import ModalScreen from '../screens/ModalScreen'

const Stack = createStackNavigator()

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='List' component={ListScreen} />
        <Stack.Screen name='Modal' component={ModalScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStackNavigator
