import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

function CoinsList(props) {
  const { navigation } = props
  return (
    <View style={styles.container}>
      <Text style={styles.boldText}>Coins List</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
        <Text style={styles.boldText}>Go to Detail</Text>
      </TouchableOpacity>
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

export default CoinsList
