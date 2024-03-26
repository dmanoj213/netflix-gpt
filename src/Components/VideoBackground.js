import React, { useEffect } from 'react'
import { NOWPLAYING_OPTIONS } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addTrailerVideo } from '../utils/moviesSlice';

const VideoBackground = () => 
{


  const dispatch = useDispatch();

  const trailerVideo = useSelector(store=> store.movies?.trailerVideo);

  const getMovieVideos = async () =>
  {
    const data = await fetch('https://api.themoviedb.org/3/movie/1011985/videos?language=en-US', NOWPLAYING_OPTIONS);
    const json = await data.json();
    console.log(json.results);

    const filteredVideo = json.results.filter(video => video.type==="Trailer");
    console.log(filteredVideo)
    const trailer = filteredVideo.length ? filteredVideo[0] : json.results[0];

    dispatch(addTrailerVideo(trailer))

  }

  useEffect(()=>{
     getMovieVideos();
  },[])

  return (
  <div>
    <iframe 
        width="560" 
        height="315"
         src={"https://www.youtube.com/embed/"+ trailerVideo.key}
         title="YouTube video player" 
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
         referrerpolicy="strict-origin-when-cross-origin" 
    >
    </iframe>  
</div>
  )
}

export default VideoBackground;


