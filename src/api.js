import axios from "axios";

const API_KEY = "9cbb52e6579c256183b59d31049fbf06";
const BASE_URL = "https://api.themoviedb.org/3";
const TREND_URL = `${BASE_URL}/trending/all/day`;

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Y2JiNTJlNjU3OWMyNTYxODNiNTlkMzEwNDlmYmYwNiIsIm5iZiI6MTcyMDk4OTA1MS40NzEwOTUsInN1YiI6IjY0ODZlNTg0ZDJiMjA5MDBlYmMxM2M4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IDai7XNAcp79Gu6AvgnsboWnbttPdcb5sdH5_xSH_Dw",
  },
};

export async function getTrending() {
  try {
    const response = await axios.get(TREND_URL, options);
    return response.data;
  } catch (error) {
    console.error("Error", error);
  }
}

export async function searchMovies(query) {
  try {
    const SEARCH_URL = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`;
    const response = await axios.get(SEARCH_URL, options);
    return response.data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return null;
  }
}

export async function getMovieDetails(movie_id) {
  try {
    const url = `${BASE_URL}/movie/${movie_id}?api_key=${API_KEY}&language=en-US`;
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
    const response = await axios.get(url, options);
    return response.data;
  } catch (error) {
    console.error("Error fetching movie cast:", error);
    return null;
  }
}
//-url 'https://api.themoviedb.org/3/movie/movie_id/reviews?language=en-US&page=1' \


export async function getMovieReviews(movie_id) {
  try {
    const url = `${BASE_URL}/movie/${movie_id}/reviews?api_key=${API_KEY}&language=en-US`;
    const response = await axios.get(url, options);
    return response.data;
  } catch (error) {
    console.error("Error fetching movie reviews:", error);
    return null;
  }
}