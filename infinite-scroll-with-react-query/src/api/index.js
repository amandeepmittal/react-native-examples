import { BASE_URL, API_KEY } from '../config';

export const gamesApi = {
  // later convert this url to infinite scrolling
  fetchAllGames: ({ pageParam = 1 }) =>
    fetch(`${BASE_URL}/games?key=${API_KEY}&page=${pageParam}`).then(res => {
      return res.json();
    })
};
