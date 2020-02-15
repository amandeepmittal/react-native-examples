import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import BookScreen from '../screens/BooksScreen'
import CartScreen from '../screens/CartScreen'
import ShoppingCartIcon from '../components/ShoppingCartIcon'

const Stack = createStackNavigator()

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Books'
          component={BookScreen}
          options={{ headerRight: props => <ShoppingCartIcon {...props} /> }}
        />
        <Stack.Screen name='Cart' component={CartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStackNavigator
