import { useEffect, useState, useParams, useLocation } from "react";
import { getMovieDetails } from "../../api";


export default function MoviDetailsPage() {
    const { movieId } = useParams();
    
    const [details, setDetails] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    
    const {
      title,
      name,
      release_date,
      vote_average,
      overview,
      poster_path,
      genres,
    } = movie || [];

    const location = useLocation();



//HTTP запит
    
    useEffect(() => {
      async function fetchMoviDetailsPage() {
        try {
            const response = await getMovieDetails(movieId);
            setDetails(response);
            
        } catch (error) {
          setError(true);
        } finally {
          setLoading(false);
        }
      }
      fetchMoviDetailsPage();
    }, [movieId]);

    return <div>MoviDetailsPage</div>;
}