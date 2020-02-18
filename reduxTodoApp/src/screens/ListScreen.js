import React from 'react'
import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  TouchableOpacity,
  FlatList
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useSelector } from 'react-redux'

import Header from '../components/Header'

function ListView() {
  const listItems = useSelector(state => state.itemList)
  console.log({ listItems })

  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 20
      }}>
      {listItems.length !== 0 ? (
        <FlatList
          data={listItems}
          keyExtractor={item => item.id.toString()}
          ItemSeparatorComponent={() => Separator()}
          renderItem={({ item }) => (
            <View style={styles.listItemContainer}>
              <View style={styles.listItemMetaContainer}>
                <Text style={styles.itemTitle} numberOfLines={1}>
                  {item.name}
                </Text>
                {/* <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    onPress={() => removeItemFromCart(item)}
                    style={styles.button}>
                    <Text style={styles.buttonText}>Remove -</Text>
                  </TouchableOpacity>
                </View> */}
              </View>
            </View>
          )}
        />
      ) : (
        <Text style={{ fontSize: 30 }}>You list is empty :'(</Text>
      )}
    </View>
  )
}

function ListScreen({ navigation }) {
  return (
    <>
      <StatusBar barStyle='light-content' />
      <View style={styles.container}>
        <Header title={'List'} />
        <ListView />
        <View style={styles.fabContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Modal')}
            style={styles.fabButton}>
            <Ionicons name='ios-add' color='#fff' size={70} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue'
  },
  fabContainer: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    position: 'absolute',
    right: 10,
    bottom: 20
  },
  fabButton: {
    backgroundColor: 'blue',
    borderRadius: 35,
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center'
  },
  listItemContainer: {
    flexDirection: 'row',
    padding: 10
  },

  listItemMetaContainer: {
    padding: 5,
    paddingLeft: 10
  },
  itemTitle: {
    fontSize: 22,
    fontWeight: '400'
  }
})

export default ListScreen
