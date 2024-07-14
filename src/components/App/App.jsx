import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import MoviesPage from "../pages/MoviesPage"
import Navigation from "../Navigation/NavLink";



export default function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route />
        <Route />
        <Route />
      </Routes>
    </div>
  );
}
