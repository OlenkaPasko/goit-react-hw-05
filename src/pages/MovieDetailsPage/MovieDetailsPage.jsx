import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getMovieDetails } from "../../api";

export default function MoviDetailsPage() {
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
    <div>
      <h1>MoviDetailsPage</h1>

      <div>
        {poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={name || title}
            width="120px"
          />
        ) : (
          <img
            src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=2000"
            alt="404"
            width="120px"
          />
        )}
        <div>
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
      <p>Additional Information</p>
      <ul>
        <li>
          <Link to={`/movies/${movieId}/cast`}>Cast</Link>
        </li>
        <li>
          <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
        </li>
      </ul>
    </div>
  );
}
