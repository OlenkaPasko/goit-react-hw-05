import React, { useState } from "react";
import { Link, useLocation,Outlet } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { searchMovies } from "../../api";

//import clsx from "clsx";
//import css from "./MoviesPage.module.css"


export default function MoviesPage() {
  const [searchResult, setSearchResult] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // HTTP запит
  const handleSearch = async (newTopic) => {
    setLoading(true);
    setError(false);
    try {
      const response = await searchMovies(newTopic);
      setSearchResult(response.results);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }

  };
  const location = useLocation();
  return (
    <div>
      <Formik
        initialValues={{ topic: "" }}
        onSubmit={(values, actions) => {
          handleSearch(values.topic);
          actions.resetForm();
        }}
      >
        <Form>
          <Field type="text" name="topic" />
          <button type="submit">Search</button>
        </Form>
      </Formik>

      {loading && <p>Loading...</p>}
      {error && <p>Error. Please try again.</p>}
      <div>
        {searchResult.length > 0 && (
          <ul>
            {searchResult.map((item) => {
              const { id, title, name } = item;
              return (
                <li key={id}>
                  <Link to={`/movies/${id}`} state={{ from: location }}>
                    {title || name}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
        <Outlet />
      </div>
    </div>
  );
}
