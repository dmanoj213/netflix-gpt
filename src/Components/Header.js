import React from 'react';
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';



const Header = () => 
{

  const navigate = useNavigate();
  const user = useSelector(store => store.user);

  const handlesignOut = () =>
  {
    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => {
      navigate("/error");
    });
    
      
  }
  return (
    <div className='absolute w-screen bg-gradient-to-b from-black z-10 flex justify-between'>
        <img className='w-48' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
         alt='logo'
        />
      {user && <div className='flex p-2'>
        <img alt='usericon' className='w-12 h-12'
        src='https://avatars.githubusercontent.com/u/94670167?s=400&u=5f63a91ab8832ec66940a446b82f637fa371b0cb&v=4'/>
        <button onClick={handlesignOut} className='font-bold text-white py-3'>(Sign-out)</button>
      </div>}

    </div>
    
  )
}

export default Header;