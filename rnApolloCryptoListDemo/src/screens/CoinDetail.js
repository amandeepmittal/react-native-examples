import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

function CoinDetail(props) {
  const { navigation } = props
  const { state } = navigation
  const { params } = state
  const { coin } = params
  const { CoinInfo, DISPLAY } = coin
  const { FullName, Name } = CoinInfo
  const { USD } = DISPLAY
  const { PRICE, OPENDAY, HIGHDAY, LOWDAY, OPEN24HOUR } = USD

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text numberOfLines={1} style={styles.text}>
          {Name} - {FullName}
        </Text>
        <Text style={styles.priceText} numberOfLines={1}>
          Price: {PRICE}
        </Text>
      </View>
      <View style={styles.statsContainer}>
        <View>
          <View style={styles.statRow}>
            <Text style={styles.stat} numberOfLines={1}>
              Open Day
            </Text>
            <Text style={styles.stat} numberOfLines={1}>
              {OPENDAY}
            </Text>
          </View>
          <View style={styles.statRow}>
            <Text style={styles.stat} numberOfLines={1}>
              Highest in a day
            </Text>
            <Text style={styles.stat} numberOfLines={1}>
              {HIGHDAY}
            </Text>
          </View>
          <View style={styles.statRow}>
            <Text style={styles.stat} numberOfLines={1}>
              Lowest in a day
            </Text>
            <Text style={styles.stat} numberOfLines={1}>
              {LOWDAY}
            </Text>
          </View>
          <View style={styles.statRow}>
            <Text style={styles.stat} numberOfLines={1}>
              Open in 24 hours
            </Text>
            <Text style={styles.stat} numberOfLines={1}>
              {OPEN24HOUR}
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    flex: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 32,
    color: '#161616'
  },
  priceText: {
    fontSize: 24,
    color: '#161616'
  },
  statsContainer: {
    flex: 62,
    backgroundColor: '#161616'
  },
  statRow: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  stat: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500'
  }
})

export default CoinDetail
