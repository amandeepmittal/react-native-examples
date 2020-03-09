import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import auth from '@react-native-firebase/auth'

export default function Login() {
  async function signIn() {
    try {
      await auth().signInAnonymously()
    } catch (e) {
      switch (e.code) {
        case 'auth/operation-not-allowed':
          console.log('Enable anonymous in your firebase console.')
          break
        default:
          console.error(e)
          break
      }
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <TouchableOpacity style={styles.button} onPress={signIn}>
        <Text style={styles.buttonText}>Login Anonymously 🔥</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffe2ff'
  },
  title: {
    marginTop: 20,
    marginBottom: 30,
    fontSize: 28,
    fontWeight: '500',
    color: '#7f78d2'
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
    backgroundColor: '#481380'
  },
  buttonText: {
    color: '#ffe2ff',
    fontSize: 24,
    marginRight: 5
  }
})
