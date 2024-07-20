import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./MovieList.module.css"

const makeNavLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};
export default function MovieList({ movies }) {
  return (
    <div className={css.movieList}>
      <ul className={css.lists}>
        {movies.map((movie) => (
          <li className={css.list} key={movie.id}>
            <NavLink to={`/movies/${movie.id}`} className={makeNavLinkClass}>
              {movie.title || movie.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
