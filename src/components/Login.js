import React,{useRef, useState} from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
const Login = () => {
    const [isSignInForm,setIsSignInForm] = useState("true")
    const [errorMessage,setErrorMessage] = useState(null)
    const email=useRef(null);
    const password=useRef(null);
    const name=useRef(null);
    const dispatch = useDispatch();
   
    const toggleSignInForm=()=>{
        setIsSignInForm(!isSignInForm)
    }
    const handleButtonClick=()=>{
        const message = checkValidData(email.current.value,password.current.value,name?.current?.value)
        setErrorMessage(message)

        if(message){
            return
        }
        if(!isSignInForm){
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
            // Signed up 
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: name.current.value
                  }).then(() => {
                    // Profile updated!
                    // ...
                    const { uid, email ,displayName}=auth.currentUser
                    dispatch(addUser({uid:uid,email:email,displayName:displayName}))
                    
                  }).catch((error) => {
                    // An error occurred
                    // ...
                    setErrorMessage(error.message)
                  });
                  
               
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+" "+errorMessage)
            });
        }
        else{
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
              
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+" "+errorMessage)
            });
        }

    }
  return (
    <div>
        <Header />
        <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/154a9550-ce07-4e28-819c-63185dd849f8/web/IN-en-20250106-TRIFECTA-perspective_27b02e7c-f668-4639-9e82-1a5485084b2a_small.jpg" alt="body" />
        </div>  
        <form onSubmit={(e)=>{e.preventDefault()}} className='w-3/12 absolute bg-black bg-opacity-80 text-white my-36 mx-auto right-0 left-0 p-12 rounded-lg'>
            <h1 className='font-bold text-3xl py-4'>{isSignInForm?"Login Form":"Signup Form"}</h1>
            {!isSignInForm &&<input ref={name} type="text" placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700'/>}
            <input ref={email} type="email" placeholder='email' className='p-4 my-4 w-full bg-gray-700'/>
            <input ref={password} type="password" placeholder='password' className='p-4 my-4 w-full bg-gray-700'/>
            <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
            <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>{isSignInForm?"Login":"Signup"}</button>
            <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm?"New to Netflix? Sign Up Now":"Already Registered. Sign In"}</p>
        </form>
      </div>
  )
}

export default Login
