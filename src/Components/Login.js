import React, { useState } from 'react';
import Header from './Header';

const Login = () => 
{

const[isSignInForm,setisSignInForm] = useState(true);
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
        <form className='absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-40'>
            <h1 className='p-4 my-4 w-full text-3xl'>{isSignInForm ? "Sign In": "Sign Up"}</h1>

            {!isSignInForm && <input type="text" placeholder='Full Name'
             className='w-full p-4 my-4 bg-gray-700'
            />}
            
            <input type="text" placeholder='Email Address'
             className='w-full p-4 my-4 bg-gray-700'
            />

            {!isSignInForm && <input type="text" placeholder='Mobile number'
            className='w-full p-4 my-4 bg-gray-700'
            />}

            <input type="password" placeholder='Password'
            className='w-full p-4 my-4 bg-gray-700'
            />

        

            <button className='bg-red-500 w-full rounded-lg p-4 my-4 cursor-pointer hover:bg-red-700'>{isSignInForm? "Sign In": "Sign Up"}</button>
            <p  onClick={toggleSignInForm} className='py-4 cursor-pointer'>{isSignInForm? "New to Netflix? Sign up now" : "Already Registered,Sign In!"}</p>
        </form>
    </div>
  )
}

export default Login
