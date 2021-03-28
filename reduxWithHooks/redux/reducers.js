import {GET_MOVIES} from './actions';

const initialState = {
  movies: [],
  favorites: [],
};

function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIES:
      return {...state, movies: action.payload};
    default:
      return state;
  }
}

export default moviesReducer;
