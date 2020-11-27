import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import booksReducer from './reducers';

const rootReducer = combineReducers({ booksReducer });

export const store = createStore(rootReducer, applyMiddleware(thunk));
