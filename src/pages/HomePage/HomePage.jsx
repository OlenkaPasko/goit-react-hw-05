import { useEffect, useState } from "react";
import { getTrending } from "../../api";

import MovieList from "../../components/MovieList/MovieList";

export default function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  // HTTP запит
  useEffect(() => {
    async function fetchTrendingMovies() {
      const response = await getTrending();
      setTrendingMovies(response.results);
      console.log(response.results);
    }
    fetchTrendingMovies();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <MovieList movies={trendingMovies} />
    </div>
  );
}