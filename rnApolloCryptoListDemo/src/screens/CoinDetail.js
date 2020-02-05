import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

function CoinDetail() {
  return (
    <View style={styles.container}>
      <Text style={styles.boldText}>Coin Detail</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center'
  },
  boldText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  }
})

export default CoinDetail
