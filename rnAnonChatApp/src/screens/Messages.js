import React, { useState } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'

export default function Messages({ route }) {
  const [messages, setMessages] = useState([
    {
      _id: 0,
      text: 'thread created',
      createdAt: new Date().getTime(),
      system: true
    },
    {
      _id: 1,
      text: 'hello!',
      createdAt: new Date().getTime(),
      user: {
        _id: 2,
        name: 'Demo'
      }
    }
  ])

  async function handleSend(newMessage = []) {
    const text = messages[0].text
    const { thread } = route.params
    const user = auth().currentUser.toJSON()

    await firestore()
      .collection('MESSAGE_THREADS')
      .doc(thread._id)
      .set(
        {
          latestMessage: {
            text,
            createdAt: new Date().getTime()
          }
        },
        { merge: true }
      )

    firestore()
      .collection('MESSAGE_THREADS')
      .doc(thread._id)
      .collection('MESSAGES')
      .add({
        text,
        createdAt: new Date().getTime(),
        user: {
          _id: user.uid
        }
      })

    setMessages(GiftedChat.append(messages, newMessage))
  }

  return (
    <GiftedChat
      messages={messages}
      onSend={newMessage => handleSend(newMessage)}
      user={{
        _id: 1
      }}
    />
  )
}
