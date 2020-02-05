import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { RestLink } from 'apollo-link-rest'

const restLink = new RestLink({
  uri: 'https://min-api.cryptocompare.com',
  headers: {
    Authorization:
      'd251970548f7321b548d3fb61d58c1a456974ea02ba41437fc9bf711f4e89782'
  }
})

export const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache()
})
