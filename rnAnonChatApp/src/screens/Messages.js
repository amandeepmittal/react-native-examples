import React, { useState } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'

export default function Messages() {
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

  function handleSend(messages) {
    setMessages(previousState =>
      GiftedChat.append(previousState.messages, messages)
    )
  }

  return (
    <GiftedChat
      messages={messages}
      onSend={handleSend}
      user={{
        _id: 1
      }}
    />
  )
}
