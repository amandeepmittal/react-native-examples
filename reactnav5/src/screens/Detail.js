import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

function Detail(props) {
  const { route } = props
  const { item } = route.params
  const { name, home, species } = item
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Detail Screen</Text>
      <View style={styles.card}>
        <Text style={styles.cardText}>Name: {name}</Text>
        <Text style={styles.cardText}>Home Planet: {home}</Text>
        <Text style={styles.cardText}>Species: {species}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebebeb'
  },
  text: {
    color: '#101010',
    fontSize: 24,
    fontWeight: 'bold'
  },
  card: {
    width: 350,
    height: 100,
    borderRadius: 10,
    backgroundColor: '#101010',
    margin: 10,
    padding: 10,
    alignItems: 'center'
  },
  cardText: {
    fontSize: 18,
    color: '#ffd700',
    marginBottom: 5
  }
})

export default Detail
