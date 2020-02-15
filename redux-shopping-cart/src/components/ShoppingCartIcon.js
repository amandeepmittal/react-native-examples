import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

function ShoppingCartIcon(props) {
  return (
    <TouchableOpacity
      onPress={() => alert('Press me')}
      style={{ marginRight: 10 }}>
      <Ionicons name='ios-cart' size={32} color='#101010' />
    </TouchableOpacity>
  )
}

export default ShoppingCartIcon
