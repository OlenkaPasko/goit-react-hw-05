import axios from "axios";

const API_KEY = "9cbb52e6579c256183b59d31049fbf06";
const BASE_URL = "https://api.themoviedb.org/3";

const options = {
  headers: {
    Authorization: { API_KEY },
  },
};
axios
  .get(BASE_URL, options)
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
