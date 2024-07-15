import { useEffect, useState } from "react";
//import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import {getTrending} from "../../api"

export default function HomePage() {
  //http запит
  useEffect(() => {
    async function getTrendingMov() {
      const response = await axios.get(getTrending);
      console.log(response);
    }
    getTrendingMov();
  }, []);
  return (
    <div>
      <h1>Запит</h1>
    </div>
  );
}



//export default function HomePage() {
  //const [trendMovies, setTrendMovies] = useState([]);
   // const location = useLocation();
   // const [isLoading, setIsLoading] = useState(false);
  
    //useEffect(() => {
   // getTrending().then((data) => {
      //  setTrendMovies(data.results);
       //  setIsLoading(false);
    //});
  //}, []);

  //return (
   // <>
     // <ul>
     //   {trendMovies.map((item) => {
       //   const { id, title, name } = item;
       //   return (
        //   <li key={id}>
        //      <Link to={`/movies/${id}`} state={{ from: location }}>
        //        {title || name}
        //      </Link>
         //   </li>
        //  );
       // })}
     // </ul>
   // </>
 // );
//}
