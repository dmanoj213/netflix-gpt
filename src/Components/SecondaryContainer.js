import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
import useTrendingMovies from '../hooks/useTrendingMovies';

const SecondaryContainer = () => 
{

    const movies = useSelector((store)=> store.movies);
    console.log(movies);

    const {nowPlayingMovies,popularMovies,trendingMovies,topRatedMovies,upcomingMovies} = movies;

  return (
    movies.nowPlayingMovies && 
  (<div className='bg-black'>
    <div className='-mt-48 relative z-20 pl-12'>
      <MovieList title={"Now Playing"} movies={nowPlayingMovies}/>
      <MovieList title={"Trending"} movies={trendingMovies}/>
      <MovieList title={"Popular"} movies={popularMovies}/>
      <MovieList title={"Top Rated Movies"} movies={topRatedMovies}/>
      <MovieList title={"Upcoming Movies"} movies={upcomingMovies}/>
    </div>
      
  </div>)
    
  )
}

export default SecondaryContainer;