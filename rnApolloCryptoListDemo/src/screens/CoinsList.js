import React, { useEffect } from 'react'
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native'
import { useQuery } from '@apollo/react-hooks'
import { FETCH_COIN_LIST } from '../graphql/Queries'

function CoinsList(props) {
  const { navigation } = props
  const { loading, data } = useQuery(FETCH_COIN_LIST)

  // useEffect(() => {
  //   console.log(data)
  // }, [])

  if (loading && !data) {
    return (
      <View style={styles.loadingIndicatorContainer}>
        <ActivityIndicator size='large' color='#fff' />
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <Text style={styles.boldText}>Coins List</Text>
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
  },
  loadingIndicatorContainer: {
    flex: 1,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default CoinsList
