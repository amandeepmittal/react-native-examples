import React from 'react'
import { View, Text } from 'react-native'

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 18 }}>
        You are not a part of any chat rooms yet :'(
      </Text>
    </View>
  )
}

export default HomeScreen
