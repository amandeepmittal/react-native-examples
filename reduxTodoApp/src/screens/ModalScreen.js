import React, { useState } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useDispatch } from 'react-redux'
import { addItem } from '../redux/reducer'

function ModalScreen({ navigation }) {
  const [value, setValue] = useState('')

  const dispatch = useDispatch()

  const onSaveNote = value => {
    dispatch(addItem(value))
    navigation.navigate('List')
  }

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
          <TextInput
            style={{
              height: 50,
              width: 200,
              padding: 5,
              borderColor: 'gray',
              borderBottomWidth: 1
            }}
            numberOfLines={1}
            onChangeText={value => setValue(value)}
            value={value}
            clearButtonMode='while-editing'
          />
          <TouchableOpacity
            style={{
              marginTop: 10,
              backgroundColor: 'blue',
              width: 50,
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 5
            }}
            onPress={() => onSaveNote(value)}>
            <Ionicons
              name='ios-arrow-dropright-circle'
              size={40}
              color='#fff'
            />
          </TouchableOpacity>
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
