import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./MovieList.module.css"

const makeNavLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};
export default function MovieList({ movies }) {
  return (
      <ul className={css.list}>
        {movies.map((movie) => (
          <li key={movie.id}>
            <NavLink to={`/movies/${movie.id}`} className={makeNavLinkClass}>
              {movie.title || movie.name}
            </NavLink>
          </li>
        ))}
      </ul>
  );
}
