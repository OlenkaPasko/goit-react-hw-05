import { Link, useLocation } from "react-router-dom";
//import clsx from "clsx";
import css from "./MovieList.module.css";

///const makeNavLinkClass = ({ isActive }) => {
  ///return clsx(css.link, isActive && css.active);
///};
export default function MovieList({ movies }) {
  const location = useLocation();
  return (
    <div className={css.movieList}>
      <ul className={css.lists}>
        {movies.map((movie) => (
          <li className={css.list} key={movie.id}>
            <Link
              to={`/movies/${movie.id}`}
              state={{ from: location }}
            >
              {movie.title || movie.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
