import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getTrending } from "../../api";

import clsx from "clsx";
import css from "./HomePage.module.css"

const makeNavLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};


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

      <ul className={css.list}>
        {trendingMovies.map((movie) => (
          <li key={movie.id}>
            <NavLink to={`/movies/${movie.id}`} className={makeNavLinkClass}>
              {movie.title || movie.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}


