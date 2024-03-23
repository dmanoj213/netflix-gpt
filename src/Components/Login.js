import React, { useState, useRef } from 'react';
import Header from './Header';
import {checkValidation} from "../utils/validation";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';

const Login = () => 
{


const email = useRef('');

const password = useRef('');

const fullName = useRef('');

const[isSignInForm,setisSignInForm] = useState(true);

const navigate = useNavigate();




const [errorMessage,seterrorMessage] = useState();

const handleValidation = () =>
{
  const message = checkValidation(email.current.value,password.current.value,fullName.current.value);
  console.log(email,password,fullName);
  seterrorMessage(message);

  if(!isSignInForm)
  {
    //sign up user
  createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    updateProfile(user, {
      displayName: fullName.current.value,
      photoURL : "https://avatars.githubusercontent.com/u/94670167?s=400&u=5f63a91ab8832ec66940a446b82f637fa371b0cb&v=4"
    })
    .then(() => {
      navigate("/browse")
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
    console.log(user);
    
    navigate("/browse")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode + "-"+ errorMessage);
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
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_small.jpg"
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
