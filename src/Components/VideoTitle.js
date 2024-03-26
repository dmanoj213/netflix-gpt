import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-36 px-12'>
       <h1 className='text-5xl font-bold'>{title}</h1>
    <p className='py-6 text-lg w-1/4'>{overview}</p>
       <button className='bg-gray-500 text-black py-2 px-5 bg-opacity-50 rounded-lg hover:bg-gray-600'> ▶ Play </button>
       <button className='bg-gray-500 text-black py-2 px-5 bg-opacity-50 rounded-lg p-2 m-2 hover:bg-gray-600'> ❗ More Info </button>
    </div>
  )
}

export default VideoTitle;