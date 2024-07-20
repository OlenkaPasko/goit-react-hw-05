import React, { useState, useEffect } from "react";
import { useSearchParams, Outlet } from "react-router-dom";
import { searchMovies } from "../../api";

import MovieList from "../../components/MovieList/MovieList";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("query") || "";
  
  useEffect(() => {
    if (query) {
      async function fetchSearchMovies() {
        setLoading(true);
        setError(false);
        try {
          const response = await searchMovies(query);
          setMovies(response.results);
        } catch (error) {
          setError(true);
        } finally {
          setLoading(false);
        }
      }
      fetchSearchMovies();
    }
  }, [query]);

const handleSubmit = (event) => {
  event.preventDefault();
  const form = event.target;
  const topic = form.elements.topic.value.trim();
  if (topic) {
    setSearchParams({ query: topic });
  }
};
  return (
    <div>
      <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="topic" />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>Error. Please try again.</p>}

      <MovieList movies={movies} />
      <Outlet />
    </div>
    </div>
  );
}
