import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

const character = {
  name: 'Luke Skywalker',
  home: 'Tatooine',
  species: 'human'
}

function Home(props) {
  const { navigation } = props
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Detail', { item: character })}>
        <Text style={styles.buttonText}>Who is {character.name}?</Text>
      </TouchableOpacity>
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
  buttonContainer: {
    backgroundColor: '#222',
    borderRadius: 5,
    padding: 10,
    margin: 20
  },
  buttonText: {
    fontSize: 20,
    color: '#fff'
  }
})

export default Home
