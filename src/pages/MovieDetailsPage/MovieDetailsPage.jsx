import { Suspense, useEffect, useState, useRef } from "react";
import { useParams,Link,useLocation, Outlet } from "react-router-dom";
import { getMovieDetails } from "../../api";
import css from "./MovieDetalisPage.module.css"

export default function MoviDetailsPage() {
  const location = useLocation();
  const locationRef = useRef(location);
  const { movieId } = useParams();

  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchMoviDetailsPage() {
      try {
        setLoading(true);
        const response = await getMovieDetails(movieId);
        setDetails(response);
        console.log(response);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchMoviDetailsPage();
  }, [movieId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading movie details.</p>;
  }

  if (!details) {
    return null;
  }

  const {
    title,
    name,
    release_date,
    vote_average,
    overview,
    poster_path,
    genres,
  } = details;

  return (
    <div className={css.container}>
      <button type="button" className={css.button}>
        <Link to={locationRef.current.state?.from ?? "/"}>Go back</Link>
      </button>
      <div className={css.cardMovie}>
        {poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={name || title}
            width="220px"
          />
        ) : (
          <img
            src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=2000"
            alt="404"
            width="220px"
          />
        )}
        <div className={css.textMovie}>
          <h1>
            {title || name} &#40;
            {release_date ? new Date(release_date).getFullYear() : "N/A"}&#41;
          </h1>

          <p>Rating: {vote_average}</p>
          <h2>Overview </h2>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>
            {genres && genres.length > 0
              ? genres.map((genre) => genre.name).join(", ")
              : "N/A"}
          </p>
        </div>
      </div>
      <div className={css.infoMovie}>
        <p>Additional Information</p>
        <ul>
          <li>
            <Link to={`cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`reviews`}>Reviews</Link>
          </li>
        </ul>
      </div>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
}
