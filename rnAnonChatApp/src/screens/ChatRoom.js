import React, { useState, useEffect } from 'react'
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native'
import firestore from '@react-native-firebase/firestore'
import Separator from '../components/Separator'

export default function ChatRoom({ navigation }) {
  const [threads, setThreads] = useState([])
  const [loading, setLoading] = useState(true) // Set loading to true on component mount

  // On load, fetch our threads and subscribe to updates
  useEffect(() => {
    const unsubscribe = firestore()
      .collection('MESSAGE_THREADS')
      .orderBy('latestMessage.createdAt', 'desc')
      .onSnapshot(querySnapshot => {
        // add threads into an array
        const threads = querySnapshot.docs.map(documentSnapshot => {
          return {
            _id: documentSnapshot.id, // required for FlatList
            // give defaults
            name: '',
            lastMessage: { text: '' },
            ...documentSnapshot.data()
          }
        })

        // Update state with the threads array
        setThreads(threads)
        // console.log(threads)
        if (loading) {
          setLoading(false)
        }
      })

    return () => unsubscribe() // Stop listening for updates whenever the component unmounts
  }, [])

  if (loading) {
    return <ActivityIndicator size='large' color='#555' />
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={threads}
        keyExtractor={item => item._id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Messages', { thread: item })}>
            <View style={styles.row}>
              {item.unread ? (
                <View style={[styles.dot, styles.dotUnread]} />
              ) : (
                <View style={styles.dot} />
              )}
              <View style={styles.content}>
                <View style={styles.header}>
                  <Text style={styles.nameText}>{item.name}</Text>
                </View>
                <Text style={styles.contentText}>
                  {item.latestMessage.text.slice(0, 90)}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <Separator />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dee2eb'
  },
  title: {
    marginTop: 20,
    marginBottom: 30,
    fontSize: 28,
    fontWeight: '500'
  },
  row: {
    paddingRight: 10,
    paddingLeft: 5,
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  content: {
    flexShrink: 1
  },
  header: {
    flexDirection: 'row'
  },
  nameText: {
    fontWeight: '600',
    fontSize: 18,
    color: '#000'
  },
  dateText: {},
  contentText: {
    color: '#949494',
    fontSize: 16,
    marginTop: 2
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'transparent',
    marginRight: 5
  },
  dotUnread: {
    backgroundColor: '#2196F3'
  }
})
