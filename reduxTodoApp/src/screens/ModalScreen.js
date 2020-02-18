import React from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

function ModalScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.closeButtonContainer}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => navigation.goBack()}>
            <Ionicons name='ios-close' color='#101010' size={40} />
          </TouchableOpacity>
        </View>
        <View style={styles.modalContainer}>
          <Text style={{ color: '#444', fontSize: 20 }}>
            What do you want to do?
          </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  innerContainer: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    height: '30%',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#fff'
  },
  closeButtonContainer: {
    position: 'absolute',
    alignItems: 'flex-end',
    right: 10
  },
  closeButton: {
    backgroundColor: '#d3d3d3',
    borderRadius: 20,
    width: 40,
    height: 40,
    top: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    margin: 60,
    top: 10,
    left: 50
  }
})

export default ModalScreen
