import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage/HomePage";
import MoviesPage from "../pages/MoviesPage";
import Navigation from "../Navigation/NavLink";
import MovieCast from "../MovieCast/MovieCast";

import MovieDetailsPage from "../pages/MovieDetailsPage/MovieDetailsPage";



export default function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
        <Route path="/movies/:movieId/cast" element={<MovieCast/>} />
      </Routes>
    </div>
  );
}
