import { createStore } from 'redux'
import cartItemsReducer from './CartItems'

const store = createStore(cartItemsReducer)

export default store
