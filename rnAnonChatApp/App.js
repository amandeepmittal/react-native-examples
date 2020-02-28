import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from 'react-native'

import Login from './src/screens/Login'

const App = () => {
  return (
    <>
      <StatusBar barStyle='dark-content' />
      <Login />
    </>
  )
}

export default App
