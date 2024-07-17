import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../api";

export default function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  //HTTp запит

  useEffect(() => {
    async function fetchMovieReviews() {
      try {
        setLoading(true);
        const response = await getMovieReviews(movieId);
        setReviews(response.results);
        console.log(response);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchMovieReviews();
  }, [movieId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading reviews list.</p>;
  }

  if (reviews.length === 0) {
    return <p>We don't have any reviews for this movie.</p>;
  }

  return (
    <div>
      <ul>
        {reviews.map((review) => {
          const { author, content, id } = review;
          return (
            <li key={id}>
              <p>{author}:</p>
              <p>{content}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
