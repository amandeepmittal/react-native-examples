import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export default function Login() {
  // firebase login function later

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to 🔥 Chat App</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => alert('Anonymous login')}>
        <Text style={styles.buttonText}>Enter Anonymously</Text>
        <Icon name='ios-lock' size={30} color='#cfdce0' />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dee2eb'
  },
  title: {
    marginTop: 20,
    marginBottom: 30,
    fontSize: 28,
    fontWeight: '500'
  },
  button: {
    flexDirection: 'row',
    borderRadius: 30,
    marginTop: 10,
    marginBottom: 10,
    width: 300,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#cf6152'
  },
  buttonText: {
    color: '#dee2eb',
    fontSize: 24,
    marginRight: 5
  }
})
