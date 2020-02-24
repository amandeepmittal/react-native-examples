import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import HomeStackNavigator from './StackNavigator'

function AppNaviagtor() {
  return (
    <NavigationContainer>
      <HomeStackNavigator />
    </NavigationContainer>
  )
}

export default AppNaviagtor
