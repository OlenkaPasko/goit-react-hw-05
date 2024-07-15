import axios from "axios";

//const API_KEY = "9cbb52e6579c256183b59d31049fbf06";
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
