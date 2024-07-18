import axios from "axios";

const API_KEY = "9cbb52e6579c256183b59d31049fbf06";
const BASE_URL = "https://api.themoviedb.org/3";
const TREND_URL = `${BASE_URL}/trending/all/day`;

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Y2JiNTJlNjU3OWMyNTYxODNiNTlkMzEwNDlmYmYwNiIsIm5iOiIxNjgyMjk1MTAxLjgxMzI5MjkiLCJzdWIiOiI2NTA5ZTRiOWU2ZGYyNTAwYjljMTQ2NmYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.-YBHP3q0mX70uVZ3ZJmKBDBm2r8Vi-dhny79iL5HidY",
  },
};

export async function getTrending() {
  try {
    const response = await axios.get(TREND_URL, options);
    return response.data;
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    return null;
  }
}

export async function searchMovies(query) {
  try {
    const SEARCH_URL = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`;
    console.log(`Fetching movies from: ${SEARCH_URL}`);
    const response = await axios.get(SEARCH_URL, options);
    return response.data;
  } catch (error) {
    console.error("Error", error);
    return null;
  }
}

export async function getMovieDetails(movie_id) {
  try {
    const url = `${BASE_URL}/movie/${movie_id}?api_key=${API_KEY}&language=en-US`;
    console.log(`Fetching movie details from: ${url}`);
    const response = await axios.get(url, options);
    return response.data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return null;
  }
}

export async function getMovieCast(movie_id) {
  try {
    const url = `${BASE_URL}/movie/${movie_id}/credits?api_key=${API_KEY}&language=en-US`;
    console.log(`Fetching movie cast from: ${url}`);
    const response = await axios.get(url, options);
    return response.data;
  } catch (error) {
    console.error("Error fetching movie cast:", error);
    return null;
  }
}

export async function getMovieReviews(movie_id) {
  try {
    const url = `${BASE_URL}/movie/${movie_id}/reviews?api_key=${API_KEY}&language=en-US`;
    console.log(`Fetching movie reviews from: ${url}`);
    const response = await axios.get(url, options);
    return response.data;
  } catch (error) {
    console.error("Error fetching movie reviews:", error);
    return null;
  }
}
