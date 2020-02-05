import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'

import CoinsList from '../screens/CoinsList'
import CoinDetail from '../screens/CoinDetail'

const MainStack = createStackNavigator(
  {
    Coins: {
      screen: CoinsList
    },
    Detail: {
      screen: CoinDetail
    }
  },
  {
    initialRouteName: 'Coins'
  }
)

export default MainStack
