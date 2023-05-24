import axios from "axios";
const TOKEN = "Ffaka9npbGuXP8LSna5gc6I9";
axios.defaults.headers.common["Authorization"] = TOKEN;
const BASE_URL = "https://mock-api.driven.com.br/api/v8/cineflex";

export const getAllMovies = () => {
  return axios
    .get(`${BASE_URL}/movies`)

    .then((response) => {
      const apiMovies = response.data;
      return apiMovies;
    })

    .catch((error) => {
      console.log("Error fetching movies:", error);
      return error;
    });
};

export const getMovieSessions = (id) => {
  return axios
    .get(`${BASE_URL}/movies/${id}/showtimes`)

    .then((response) => {
      const apiMovieSessions = response.data.days;
      const movie = response.data;
      return [apiMovieSessions, movie];
    })

    .catch((error) => {
      console.log("Error fetching movies:", error);
      return error;
    });
};
