import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { REMOVE_FROM_CART } from '../redux/CartItems'

function Separator() {
  return <View style={{ borderBottomWidth: 1, borderBottomColor: '#a9a9a9' }} />
}

function CartScreen() {
  const cartItems = useSelector(state => state)
  const dispatch = useDispatch()

  const removeItemFromCart = item =>
    dispatch({
      type: REMOVE_FROM_CART,
      payload: item
    })
  return (
    <View
      style={{
        flex: 1
      }}>
      {cartItems.length !== 0 ? (
        <FlatList
          data={cartItems}
          keyExtractor={item => item.id.toString()}
          ItemSeparatorComponent={() => Separator()}
          renderItem={({ item }) => (
            <View style={styles.bookItemContainer}>
              <Image source={{ uri: item.imgUrl }} style={styles.thumbnail} />
              <View style={styles.bookItemMetaContainer}>
                <Text style={styles.textTitle} numberOfLines={1}>
                  {item.name}
                </Text>
                <Text style={styles.textAuthor}>by {item.author}</Text>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    onPress={() => removeItemFromCart(item)}
                    style={styles.button}>
                    <Text style={styles.buttonText}>Remove -</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        />
      ) : (
        <View style={styles.emptyCartContainer}>
          <Text style={styles.emptyCartMessage}>Your cart is empty :'(</Text>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  bookItemContainer: {
    flexDirection: 'row',
    padding: 10
  },
  thumbnail: {
    width: 100,
    height: 150
  },
  bookItemMetaContainer: {
    padding: 5,
    paddingLeft: 10
  },
  textTitle: {
    fontSize: 22,
    fontWeight: '400'
  },
  textAuthor: {
    fontSize: 18,
    fontWeight: '200'
  },
  buttonContainer: {
    position: 'absolute',
    top: 110,
    left: 10
  },
  button: {
    borderRadius: 8,
    backgroundColor: '#ff333390',
    padding: 5
  },
  buttonText: {
    fontSize: 22,
    color: '#fff'
  },
  emptyCartContainer: {
    marginTop: 250,
    justifyContent: 'center',
    alignItems: 'center'
  },
  emptyCartMessage: {
    fontSize: 28
  }
})

export default CartScreen
