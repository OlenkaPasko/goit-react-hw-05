import { NavLink } from "react-router-dom";
import css from "./NavLink.module.css";
import clsx from "clsx";


const makeNavLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};


export default function Navigation() {
  return (
    <div className={css.container}>
    <header className={css.header}>
      <nav className={css.nav}>
        <NavLink to="/" className={makeNavLinkClass}>
          Home
        </NavLink>
        <NavLink to="/movies" className={makeNavLinkClass}>
          Movies
        </NavLink>
      </nav>
    </header></div>
  );
}
