import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='absolute w-screen aspect-video text-white bg-gradient-to-r from-black  pt-[20%] px-24'>
       <h1 className='text-2xl md:text-5xl font-bold'>{title}</h1>
    <p className='hidden md:inline-block py-6 text-lg w-1/4'>{overview}</p>
  <div className='my-4 md:m-0'>
    <button className=' bg-gray-500 text-white py-1 md:py-2 px-3 md:px-5 bg-opacity-50 rounded-lg hover:bg-gray-600'> ▶ Play </button>
    <button className='bg-gray-500 hidden md:inline-block text-white py-2 px-5 bg-opacity-50 rounded-lg p-2 m-2 hover:bg-gray-600'> ❗ More Info </button>
  </div>
       
    </div>
  )
}

export default VideoTitle;
