import React from 'react';
import lang from '../utils/languageConstants';
import { useSelector } from 'react-redux';


const GptSearchBar = () => 
{

    const langKey = useSelector((store)=> store.config.lang) 
  return (
    <div className='pt-[10%] flex justify-center'>
        <form className='w-1/2 grid grid-cols-12'>
            <input className='p-4 m-4 col-span-9 border border-black rounded-lg'
             type="text" placeholder={lang[langKey].gptSearchPlaceHolder}/>
            <button className='col-span-3 m-4 py-2 px-2 text-white bg-red-700 rounded-lg hover:bg-red-800'>{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar;