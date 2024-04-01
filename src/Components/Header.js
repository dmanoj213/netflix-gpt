import React, { useEffect } from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO_URL, SUPPORTED_LANGUAGES, USER_AVATAR } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';



const Header = () => 
{

  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store)=> store.gpt.showGptSearch)

  const dispatch = useDispatch();

  const handleGptSearchView = () =>
  {
      dispatch(toggleGptSearchView());
  }

  const handlesignOut = () =>
  {
    signOut(auth).then(() => {
      }).catch((error) => {
      navigate("/error");
    });
    
      
  }

  const handleLanguageChange = (e)=>
  {
    dispatch(changeLanguage(e.target.value));
  }

  useEffect(()=>
 {
     const unsubscribe = onAuthStateChanged(auth, (user) => {
     if (user) {
      
      const {uid,email,displayName,photoURL} = user;
      dispatch(addUser({uid: uid,email:email,displayName:displayName,photoURl:photoURL}));
      navigate("/browse")
      
    } else {
      dispatch(removeUser());
      navigate("/")
    }
  });
     return () => unsubscribe();
 },[])

  return (
    <div className='absolute w-screen bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between'>
        <img className='w-48 mx-auto md:mx-0' src={LOGO_URL}
         alt='logo'
        />
      {user && <div className='flex p-2 justify-between'>
        { showGptSearch &&
        <select className='p-2 m-2 rounded-lg' onChange={handleLanguageChange}>
          {SUPPORTED_LANGUAGES.map(lang=> <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
        </select>}
        <button onClick={handleGptSearchView} className='px-4 mx-4 py-1 my-2  bg-purple-500 text-white rounded-lg hover:bg-purple-700'>
          {showGptSearch ? "HomePage": "GPTSearch"}
          </button>
        <img alt='usericon' className='hidden md:block w-12 h-12'
        src={USER_AVATAR}/>
        <button onClick={handlesignOut} className='font-bold text-white py-3'>(Sign-out)</button>
      </div>}

    </div>

    
  )
}

export default Header;


