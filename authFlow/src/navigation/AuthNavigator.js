import React, { useState, useEffect, createContext } from 'react'
import auth from '@react-native-firebase/auth'
import SignInStack from './SignInStack'
import SignOutStack from './SignOutStack'

export const AuthContext = createContext(null)

export default function AuthNavigator() {
  const [initializing, setInitializing] = useState(true)
  const [user, setUser] = useState(null)

  // Handle user state changes
  function onAuthStateChanged(result) {
    setUser(result)
    if (initializing) setInitializing(false)
  }

  // useEffect(() => {
  //   const authSubscriber = auth().onAuthStateChanged(onAuthStateChanged)

  //   // unsubscribe on unmount
  //   return authSubscriber
  // }, [])

  if (initializing) {
    return null
  }

  return user ? (
    <AuthContext.Provider value={user}>
      <SignInStack />
    </AuthContext.Provider>
  ) : (
    <SignOutStack />
  )
}

class Initial extends Component {
  state = {
    isAssetsLoadingComplete: false
  }

  componentDidMount = async () => {
    try {
      // previously
      this.loadLocalAsync()

      await this.props.firebase.checkUserAuth(user => {
        if (user) {
          // if the user has previously logged in
          this.props.navigation.navigate('App')
        } else {
          // if the user has previously signed out from the app
          this.props.navigation.navigate('Auth')
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

  loadLocalAsync = async () => {
    return await Promise.all([
      Asset.loadAsync([
        require('../assets/flame.png'),
        require('../assets/icon.png')
      ]),
      Font.loadAsync({
        ...Icon.Ionicons.font
      })
    ])
  }

  handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error)
  }

  handleFinishLoading = () => {
    this.setState({ isAssetsLoadingComplete: true })
  }

  render() {
    return (
      <AppLoading
        startAsync={this.loadLocalAsync}
        onFinish={this.handleFinishLoading}
        onError={this.handleLoadingError}
      />
    )
  }
}
