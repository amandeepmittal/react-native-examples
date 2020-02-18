import React from 'react'
import { Provider as StateProvider } from 'react-redux'
import store from './src/redux/store'
import MainStackNavigator from './src/navigation/AppNavigator'

export default function App() {
  return (
    <StateProvider store={store}>
      <MainStackNavigator />
    </StateProvider>
  )
}
