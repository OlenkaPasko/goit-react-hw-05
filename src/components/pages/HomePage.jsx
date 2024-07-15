import { useEffect, useState } from "react";
import { getTrending } from "../../api";

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
      <ul>
        {trendingMovies.map((movie) => (
          <li key={movie.id}>{movie.title || movie.name}</li>
        ))}
      </ul>
    </div>
  );
}


