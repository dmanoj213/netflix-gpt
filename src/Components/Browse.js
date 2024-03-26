import React, { useEffect } from 'react';
import Header from './Header';
import { NOWPLAYING_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addNowPlayingmovies } from '../utils/moviesSlice';

const Browse = () => 
{

  const dispatch = useDispatch();

  const fetch_nowplaying = async () =>
      {
         const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', NOWPLAYING_OPTIONS);

         const json = await data.json();

         console.log(json.results);

         dispatch(addNowPlayingmovies(json.results))

      }  

  useEffect(()=>
  {
      fetch_nowplaying();
  },[])
  return (
   <Header/>
  )
}

export default Browse;

