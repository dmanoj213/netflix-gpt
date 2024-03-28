import { useDispatch } from "react-redux"
import { NOWPLAYING_OPTIONS } from "../utils/constants";
import { addTrendingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";



const useTrendingMovies = () => 
{
    const dispatch = useDispatch();


    const getTrendingMovies = async () =>
    {
        const data = await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US',NOWPLAYING_OPTIONS);
        const json = await data.json();
        dispatch(addTrendingMovies(json.results));
    }

useEffect(()=>
{
    getTrendingMovies();
    
},[])
  
}

export default useTrendingMovies