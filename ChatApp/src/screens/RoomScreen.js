// implement firestore to store messages: Creating new messages

// Step 1 import statements especially hooks
import React, { useState, useContext, useEffect } from 'react';
import { GiftedChat, Bubble, Send } from 'react-native-gifted-chat';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';
// Step 1.1 import auth context since we need current user info
import { AuthContext } from '../navigation/AuthProvider';
// Step 1.1 import firestore since we need to make queries to the collection
// THREADS & add a new message when possible
import firestore from '@react-native-firebase/firestore';

// Step 2
export default function RoomScreen({ route }) {
  // create an empty messages array
  const [messages, setMessages] = useState([]);
  // fetch `thread` object from the previous screen to get current thread id or room id the user is in, using route.params from react-navigation!!!
  const { thread } = route.params;
  // get current user details who is logged in
  const { user } = useContext(AuthContext);
  // convert the user data in a json object
  const currentUser = user.toJSON();

  // helper method used when sending a message
  async function handleSend(messages) {
    // Step 3 get the text of the message
    const text = messages[0].text;

    // Step 3.1 create a message collection inside threads
    // when sending a message after this step, on firebase console
    // you are going to see a MESSAGES sub collection inside collection THREADS
    firestore()
      .collection('THREADS')
      // get the document that is the thread id of the current room the user is in
      .doc(thread._id)
      // add the MESSAGES collection to it
      .collection('MESSAGES')
      .add({
        // add the text
        text,
        // add the current time
        createdAt: new Date().getTime(),
        // add user info related to the text, that is users id and email
        user: {
          _id: currentUser.uid,
          email: currentUser.email
        }
      });

    // Step 4 have to update the collection THREADS to display
    // the latest message on the home screen under the description
    // of Room name on home screen
    // to do this, get the current room's id (thread.id)
    // set an object called latestMessage: {} with the message text, its time
    // and merge it.
    // set with merge will update fields in the document or
    // create it if it doesn't exists
    await firestore()
      .collection('THREADS')
      .doc(thread._id)
      .set(
        {
          latestMessage: {
            text,
            createdAt: new Date().getTime()
          }
        },
        // pass the second property
        { merge: true }
      );

    // set without merge will overwrite a document
  }

  // Step 5 fetch messages from Firestore in useEffect hook
  useEffect(() => {
    const messagesListener = firestore()
      .collection('THREADS')
      .doc(thread._id)
      .collection('MESSAGES')
      // order these messages to display according
      // to the timestamp they are sent in desc order
      .orderBy('createdAt', 'desc')
      .onSnapshot(querySnapshot => {
        // A QuerySnapshot contains zero or more DocumentSnapshot objects
        // representing the results of a query. The documents can be accessed
        // as an array via the docs property

        const messages = querySnapshot.docs.map(doc => {
          const firebaseData = doc.data();

          // the data object is going to contain the id of the document
          // the text
          // the timestamp and other data

          const data = {
            _id: doc.id,
            text: '',
            createdAt: new Date().getTime(),
            ...firebaseData
          };

          // if the msg generator is not by the system
          // it means the user sent the text message
          if (!firebaseData.system) {
            data.user = {
              ...firebaseData.user,
              name: firebaseData.user.email
            };
          }

          return data;
        });

        // lastly update the messages state variable
        setMessages(messages);
      });

    // Stop listening for updates whenever the component unmounts
    return () => messagesListener();
  }, []);

  function renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#6646ee'
          }
        }}
        textStyle={{
          right: {
            color: '#fff'
          }
        }}
      />
    );
  }

  function renderLoading() {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size='large' color='#6646ee' />
      </View>
    );
  }

  function renderSend(props) {
    return (
      <Send {...props}>
        <View style={styles.sendingContainer}>
          <IconButton icon='send-circle' size={32} color='#6646ee' />
        </View>
      </Send>
    );
  }

  function scrollToBottomComponent() {
    return (
      <View style={styles.bottomComponentContainer}>
        <IconButton icon='chevron-double-down' size={36} color='#6646ee' />
      </View>
    );
  }

  return (
    <GiftedChat
      messages={messages}
      // Step 6: make sure to change the user id to current user
      onSend={handleSend}
      user={{ _id: currentUser.uid }}
      placeholder='Type your message here...'
      alwaysShowSend
      showUserAvatar
      scrollToBottom
      renderBubble={renderBubble}
      renderLoading={renderLoading}
      renderSend={renderSend}
      scrollToBottomComponent={scrollToBottomComponent}
    />
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  sendingContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottomComponentContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});
