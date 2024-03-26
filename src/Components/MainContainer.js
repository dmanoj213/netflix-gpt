import React from 'react';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';
import { useSelector } from 'react-redux';

const MainContainer = () => 
{
  
    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    if(!movies) return;

    const mainmovie = movies[0];

    console.log(mainmovie);

 return (
    <div>
        <VideoTitle title={mainmovie.original_title} overview={mainmovie.overview}/>
        <VideoBackground/>

    </div>
  )
}

export default MainContainer;

