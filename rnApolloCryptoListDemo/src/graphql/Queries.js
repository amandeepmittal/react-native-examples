import gql from 'graphql-tag'

export const FETCH_COIN_LIST = gql`
  query FetchCoinsList {
    coinsList
      @rest(type: "ListPayload", path: "/data/top/totalvolfull?tsym=USD") {
      Data @type(name: "DataPayload") {
        CoinInfo @type(name: "CoinInfoPayload") {
          Id
          Name
          FullName
        }
        DISPLAY @type(name: "DisplayPayload") {
          USD @type(name: "USDPayLoad") {
            PRICE
            OPENDAY
            HIGHDAY
            LOWDAY
            OPEN24HOUR
          }
        }
      }
    }
  }
`
