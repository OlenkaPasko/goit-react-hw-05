
import { useEffect, useState } from "react";
import { getMovieCast } from "../../api"

export default function MovieCast() {
    const [castList, setCastList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    

    //HTTp запит

    useEffect(() => {
        async function fetchMovieCast() {
            
            try {
                setLoading(true);
                const response = await getMovieCast(movie_id);
                
            }
            catch (error) {
                
            }
        }
    })

    return (<div>MovieCast</div>);

}