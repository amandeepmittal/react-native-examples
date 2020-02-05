import React from 'react'
import { View, StyleSheet, FlatList, ActivityIndicator } from 'react-native'
import { useQuery } from '@apollo/react-hooks'

import { FETCH_COIN_LIST } from '../graphql/Queries'
import ListItem from '../components/ListItem'

function CoinsList(props) {
  const { navigation } = props
  const { loading, data } = useQuery(FETCH_COIN_LIST)

  if (loading && !data) {
    return (
      <View style={styles.loadingIndicatorContainer}>
        <ActivityIndicator size='large' color='#fff' />
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.contentContainerStyle}
        data={data.coinsList.Data}
        keyExtractor={item => item.CoinInfo.Id.toString()}
        renderItem={({ item }) => {
          return (
            <ListItem
              coin={item}
              onPress={() => navigation.navigate('Detail', { coin: item })}
            />
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333'
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
