import { GET_BOOKS } from './actions';

const initialState = {
  books: [],
  bookmarks: []
};

function booksReducer(state = initialState, action) {
  switch (action.type) {
    case GET_BOOKS:
      return { ...state, books: action.payload };
    default:
      return state;
  }
}

export default booksReducer;
