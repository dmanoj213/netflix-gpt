import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterpath}) => 
{
  if(!posterpath) return null;
  return (
    <div className=' w-36 md:w-48 pr-4 z-10'>
        <img alt='Movie Card' src={IMG_CDN_URL+posterpath}/>
    </div>
  )
}

export default MovieCard;