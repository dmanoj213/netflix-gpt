import React, { useEffect } from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO_URL, USER_AVATAR } from '../utils/constants';



const Header = () => 
{

  const navigate = useNavigate();
  const user = useSelector(store => store.user);

  const dispatch = useDispatch();

  const handlesignOut = () =>
  {
    signOut(auth).then(() => {
      }).catch((error) => {
      navigate("/error");
    });
    
      
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
    <div className='absolute w-screen bg-gradient-to-b from-black z-10 flex justify-between'>
        <img className='w-48' src={LOGO_URL}
         alt='logo'
        />
      {user && <div className='flex p-2'>
        <img alt='usericon' className='w-12 h-12'
        src={USER_AVATAR}/>
        <button onClick={handlesignOut} className='font-bold text-white py-3'>(Sign-out)</button>
      </div>}

    </div>
    
  )
}

export default Header;


