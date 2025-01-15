import React,{useState} from 'react'
import Header from './Header'
const Login = () => {
    const [isSignInForm,setIsSignInForm] = useState("true")
    const toggleSignInForm=()=>{
        setIsSignInForm(!isSignInForm)
    }
  return (
    <div>
        <Header />
        <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/154a9550-ce07-4e28-819c-63185dd849f8/web/IN-en-20250106-TRIFECTA-perspective_27b02e7c-f668-4639-9e82-1a5485084b2a_small.jpg" alt="body" />
        </div>  
        <form className='w-3/12 absolute bg-black bg-opacity-80 text-white my-36 mx-auto right-0 left-0 p-12 rounded-lg'>
            <h1 className='font-bold text-3xl py-4'>{isSignInForm?"Login Form":"Signup Form"}</h1>
            {!isSignInForm &&<input type="text" placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700'/>}
            <input type="email" placeholder='email' className='p-4 my-4 w-full bg-gray-700'/>
            <input type="password" placeholder='password' className='p-4 my-4 w-full bg-gray-700'/>
            <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignInForm?"Login":"Signup"}</button>
            <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm?"New to Netflix? Sign Up Now":"Already Registered. Sign In"}</p>
        </form>
      </div>
  )
}

export default Login
