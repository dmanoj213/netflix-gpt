
import  { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addTrailerVideo } from '../utils/moviesSlice';
import { NOWPLAYING_OPTIONS } from '../utils/constants';

const useTrailerVideo = (movieId) => {
  
const dispatch = useDispatch();

const getMovieVideos = async () =>
  {
    const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', NOWPLAYING_OPTIONS);
    const json = await data.json();
    

    const filteredVideo = json.results.filter(video => video.type==="Trailer");
    
    const trailer = filteredVideo.length ? filteredVideo[0] : json.results[0];

    dispatch(addTrailerVideo(trailer))

  }

  useEffect(()=>{
    getMovieVideos();
  },[])

  
}


export default useTrailerVideo;


