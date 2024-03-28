import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { NOWPLAYING_OPTIONS } from "../utils/constants";


const useNowPlayingMovies = () =>
{
    const dispatch = useDispatch();

    const fetch_nowplaying = async () =>
      {
         const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', NOWPLAYING_OPTIONS);

         const json = await data.json();

         dispatch(addNowPlayingMovies(json.results))

      }  

  useEffect(()=>
  {
      fetch_nowplaying();
  },[])
}

export default useNowPlayingMovies;