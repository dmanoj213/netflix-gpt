import { BG_URL } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";


const GptSearch = () => {
  return (
<>
  <div>
   <div className='fixed -z-10'>
            <img className="h-screen w-screen object-cover" src={BG_URL}
            alt='bg-img'
            />
    </div>
    <div>
        <GptSearchBar/>
        <GptMovieSuggestions/>
    </div>
  </div>
  
  </>
)
}

export default GptSearch;
