import axios from "axios";

const API_KEY = "9cbb52e6579c256183b59d31049fbf06";
//const BASE_URL = "https://api.themoviedb.org/3";
//const TREND_URL = `${BASE_URL}/trending/all/day`;

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {
  api_key: API_KEY,
  language: "en-use",
};

export async function getTrending() {
  const response = await axios.get("/trending/movie/day");
  return response.data;
}

export async function searchMovies(query) {
  const response = await axios.get(`search/movie/?&query=${query}`);
  return response.data;
}

export async function getMovieDetails(movie_id) {
  const response = await axios.get(`movie/${movie_id}`);
  return response.data;
}

export async function getMovieCast(movie_id) {
  const response = await axios.get(`/movie/${movie_id}/credits`);
  return response.data;
}

export async function getMovieReviews(movie_id) {
  const response = await axios.get(`/movie/${movie_id}/revies`);
  return response.data;
}
