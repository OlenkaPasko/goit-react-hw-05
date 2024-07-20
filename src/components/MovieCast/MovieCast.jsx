import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast } from "../../api";
import css from "./MovieCast.module.css"

export default function MovieCast() {
  const { movieId } = useParams();
  const [castList, setCastList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchMovieCast() {
      try {
        setLoading(true);
        const response = await getMovieCast(movieId);
        setCastList(response.cast);
        console.log(response);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchMovieCast();
  }, [movieId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading cast list.</p>;
  }

  if (!castList || castList.length === 0) {
    return <p>No information about cast</p>;
  }

  return (
    <div className={css.list}>
      {castList.map((actor) => (
        <div key={actor.id} className={css.item}>
          {actor.profile_path ? (
            <img
              src={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
              alt={actor.name}
              width="200"
            />
          ) : (
            <img
              src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=2000"
              alt="404"
              width="120px"
            />
          )}
          <p>{actor.name}</p>
          <p>Character: {actor.character}</p>
        </div>
      ))}
    </div>
  );
}
