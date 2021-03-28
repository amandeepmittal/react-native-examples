import axios from 'axios';

// Define action types
export const GET_MOVIES = 'FETCH_MOVIES';

// Construct a BASE URL for API endpoint
const API_URL = 'https://api.themoviedb.org/3/movie/popular';
const API_KEY = 'bb925e230868e5ea561be5d9be231edb';
const PARAMS = 'page=1';
const BASE_URL = `${API_URL}?api_key=${API_KEY}&${PARAMS}`;

export const getMovies = () => {
  try {
    return async dispatch => {
      const res = await axios.get(`${BASE_URL}`);
      console.log(res.data.results);

      if (res.data) {
        dispatch({
          type: GET_MOVIES,
          payload: res.data,
        });
      } else {
        console.log('Unable to fetch');
      }
    };
    // eslint-disable-next-line no-unreachable
  } catch (error) {
    // Add custom logic to handle errors
  }
};
