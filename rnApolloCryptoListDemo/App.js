import React from 'react'

import AppNavigator from './src/navigation/AppNavigator'
import { ApolloProvider } from '@apollo/react-hooks'
import { client } from './src/graphql/Client'

export default function App() {
  return (
    <ApolloProvider client={client}>
      <AppNavigator />
    </ApolloProvider>
  )
}
