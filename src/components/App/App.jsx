import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";

export default function App() {
  return (
    <div>
      <h1>home work</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route />
        <Route />
        <Route />
        <Route />
      </Routes>
    </div>
  );
}
