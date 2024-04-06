import React, { useRef } from 'react';
import lang from '../utils/languageConstants';
import { useDispatch, useSelector } from 'react-redux';
import openai from '../utils/openai';
import { NOWPLAYING_OPTIONS } from '../utils/constants';
import { addGptMovieNames, addGptMovieResult } from '../utils/gptSlice';


const GptSearchBar = () => 
{

const dispatch = useDispatch();
 const langKey = useSelector((store)=> store.config.lang);
 const searchText = useRef(null); 

 const searchTMDBMovies = async (movie)=>
 {
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query='
    +movie+
    '&include_adult=false&language=en-US&page=1', NOWPLAYING_OPTIONS)
    const json = await data.json();
   

    return json.results;

 }
 const handleGptSearchClick = async () =>
{
    const gptQuery = "Act as a Movie Recommendation System and suggest some movies for the query :"+searchText.current.value
    +".Only give me names of 5 movies,comma seperated like the example result given ahead. Example Results: Don,Sholay,Salaar,KGF,Kabza";
    const gptResults = await openai.chat.completions.create({
        messages: [{ role: 'user', content: gptQuery }],
        model: 'gpt-3.5-turbo',
      });

   
    

    //fetching movies from gpt api in the form of aaray

    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

    //extracting movies from tmdb by giving the gptmovie results from gpt api to tmdb api
    //since we get movies in the for of the array we use map to make 5 api calls for 5 movies it will return 5 promises which will be resolved 
    //by PROMISE.ALL() method

    //ex: gptMovies = [KGF,SALAAR,HERA PHERI,KABZA,RRR]

    const promiseArray = gptMovies.map(movie=> searchTMDBMovies(movie));

    const tmdbResults = await Promise.all(promiseArray);



    dispatch(addGptMovieNames(gptMovies));

    
    dispatch(addGptMovieResult(tmdbResults));




}

  return (
    <div className='pt-[40%] md:pt-[10%] flex justify-center'>
        <form className=' w-full md:w-1/2 grid grid-cols-12' onSubmit={(e)=> e.preventDefault()}>
            <input ref={searchText} className='p-4 m-4 col-span-9 border border-black rounded-lg'
             type="text" placeholder={lang[langKey].gptSearchPlaceHolder}/>
            <button onClick={handleGptSearchClick} className='col-span-3 m-4 py-2 px-2 text-white bg-red-700 rounded-lg hover:bg-red-800'>{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar;