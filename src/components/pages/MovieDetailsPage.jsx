import { useEffect, useState, useParams } from "react";
import { getMovieDetails } from "../../api";


export default function MoviDetailsPage() {
    const { movieId } = useParams();
    const [details, setDetails] = useState(null);
    const {
      title,
      name,
      release_date,
      vote_average,
      overview,
      poster_path,
      genres,
    } = movie || [];


//HTTP запит
    
    useEffect(() => {
      async function fetchMoviDetailsPage() {
        try {
          const response = await getMovieDetails(movieId);
        } catch (error) {}
      }
      fetchMoviDetailsPage();
    }, [movieId]);

    return <div>MoviDetailsPage</div>;
}