import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { IconButton, Title } from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';

export default function AddRoomScreen({ navigation }) {
  const [roomName, setRoomName] = useState('');

  /**
   * Create a new Firestore collection to save threads
   */
  function handleButtonPress() {
    if (roomName.length > 0) {
      firestore()
        .collection('THREADS')
        .add({
          name: roomName,
          // Step 7: since the THREADS is going to store the
          // latest message ( or the last msg sent in a thread)
          // it is better to add a system generated message
          // to indicate that a chat room is created
          // this is going to be displayed only when a new room is created
          latestMessage: {
            text: `You have joined the room ${roomName}.`,
            createdAt: new Date().getTime()
          }
        })
        // Step 8: A DocumentReference refers to a document location in a Firestore
        // database and can be used to write, read, or listen to the location.
        // The document at the referenced location may or may not exist. A
        // DocumentReference can also be used to create a CollectionReference to
        // a subcollection.
        // we need docRef to refer or create MESSAGES sub
        // collection inside THREADS when the first time
        // a chat room is created
        .then(docRef => {
          docRef.collection('MESSAGES').add({
            // this is going to be system generated
            // and the first msg in any new chat room created
            text: `You have joined the room ${roomName}.`,
            createdAt: new Date().getTime(),
            system: true
          });
          navigation.navigate('Home');
        });
    }
  }
  return (
    <View style={styles.rootContainer}>
      <View style={styles.closeButtonContainer}>
        <IconButton
          icon='close-circle'
          size={36}
          color='#6646ee'
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={styles.innerContainer}>
        <Title style={styles.title}>Create a new chat room</Title>
        <FormInput
          labelName='Room Name'
          value={roomName}
          onChangeText={text => setRoomName(text)}
          clearButtonMode='while-editing'
        />
        <FormButton
          title='Create'
          modeValue='contained'
          labelStyle={styles.buttonLabel}
          onPress={() => handleButtonPress()}
          disabled={roomName.length === 0}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1
  },
  closeButtonContainer: {
    position: 'absolute',
    top: 30,
    right: 0,
    zIndex: 1
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    marginBottom: 10
  },
  buttonLabel: {
    fontSize: 22
  }
});
