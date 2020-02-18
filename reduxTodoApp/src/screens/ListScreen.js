import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

function ListScreen() {
  return (
    <View style={styles.container}>
      <Text>List Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default ListScreen
