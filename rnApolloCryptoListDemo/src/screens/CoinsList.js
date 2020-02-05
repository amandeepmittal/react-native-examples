import React, { useEffect } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { useQuery } from '@apollo/react-hooks'
import { FETCH_COIN_LIST } from '../graphql/Queries'

function CoinsList(props) {
  const { navigation } = props
  const { loading, data } = useQuery(FETCH_COIN_LIST)

  useEffect(() => {
    console.log(data)
  }, [])

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
