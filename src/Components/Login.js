import React, { useState, useRef } from 'react';
import Header from './Header';
import {checkValidation} from "../utils/validation";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { BG_URL, USER_AVATAR } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';


const Login = () => 
{

const email = useRef('');

const password = useRef('');

const fullName = useRef('');

const dispatch = useDispatch();


const[isSignInForm,setisSignInForm] = useState(true);

const [errorMessage,seterrorMessage] = useState();

const handleValidation = () =>
{
  const message = checkValidation(email.current.value,password.current.value,fullName.current.value);
 

  if(!isSignInForm)
  {
    if(message!== null) return seterrorMessage(message);
    //sign up user
  createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    
    const user = userCredential.user;
    
    updateProfile(user, {
      displayName: fullName.current.value,
      photoURL : USER_AVATAR,
    })
    .then(() => {
      const {uid,email,displayName,photoURL}= auth.currentUser;
      dispatch(addUser({
        uid: uid,
        email: email,
        displayName: displayName,
        photoURL:photoURL
      }))
    })
    .catch((error) => {
      seterrorMessage(error.message);
    });
   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrorMessage(errorCode + "-" + errorMessage)

  });

  

  }
  else{
    //sign-in user

  signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrorMessage(errorMessage)
  });


  }

}

const toggleSignInForm = ()=>
{
    setisSignInForm(!isSignInForm);
}
  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src={BG_URL}
            alt='bg-img'
            />
        </div>
        <form onSubmit={(e)=> e.preventDefault()} className='absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-40'>
            <h1 className='p-4 my-4 w-full text-3xl'>{isSignInForm ? "Sign In": "Sign Up"}</h1>

            {!isSignInForm && <input ref={fullName} type="text" placeholder='Full Name'
             className='w-full p-4 my-4 bg-gray-700'
            />}
            
            <input ref={email} type="text" placeholder='Email Address'
             className='w-full p-4 my-4 bg-gray-700'
            />

            <input ref={password} type="password" placeholder='Password'
            className='w-full p-4 my-4 bg-gray-700'
            />

            <button onClick={handleValidation}  className='bg-red-500 w-full rounded-lg p-4 my-4 cursor-pointer hover:bg-red-700'>{isSignInForm? "Sign In": "Sign Up"}</button>
            <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
            <p  onClick={toggleSignInForm} className='py-4 cursor-pointer'>{isSignInForm? "New to Netflix? Sign up now" : "Already Registered,Sign In!"}</p>
        </form>
    </div>
  )
}

export default Login
