import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

function ListItem(props) {
  const { coin, onPress } = props
  const { CoinInfo, DISPLAY } = coin
  const { FullName, Name } = CoinInfo

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPress && onPress(coin)}>
      <View style={styles.row}>
        <Text style={styles.text} numberOfLines={1}>
          {Name}
        </Text>
        <View style={styles.right}>
          <Text style={styles.text} numberOfLines={1}>
            {DISPLAY.USD.PRICE}
          </Text>
        </View>
      </View>

      <View style={styles.row}>
        <Text style={[styles.text, styles.name]} numberOfLines={1}>
          {FullName}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  active: {
    backgroundColor: 'rgba(255,255,255,0.05)'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  right: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'flex-end'
  },
  text: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '500'
  },
  name: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 16,
    fontWeight: '300'
  }
})

export default ListItem
