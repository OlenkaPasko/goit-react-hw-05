import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { searchMovies } from "../api";


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
        {searchResult.map((movie) => (
          <div key={movie.id}>{movie.title}</div>
        ))}
      </div>
    </div>
  );
}
