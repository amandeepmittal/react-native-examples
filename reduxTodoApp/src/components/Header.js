import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function Header(props) {
  const { title } = props
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
    height: 125,
    paddingTop: 20
  },
  text: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '500'
  }
})

export default Header
