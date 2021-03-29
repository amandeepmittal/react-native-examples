import {GET_MOVIES, ADD_FAVORITE_ITEM, REMOVE_FAVORITE_ITEM} from './actions';

const initialState = {
  movies: [],
  favorites: [],
};

function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIES:
      return {...state, movies: action.payload};
    case ADD_FAVORITE_ITEM:
      return {...state, favorites: [...state.favorites, action.payload]};
    case REMOVE_FAVORITE_ITEM:
      return {
        ...state,
        favorites: state.favorites.filter(
          movie => movie.id !== action.payload.id,
        ),
      };
    default:
      return state;
  }
}

export default moviesReducer;
