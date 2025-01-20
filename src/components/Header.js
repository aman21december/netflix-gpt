import React, { useEffect } from "react"
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom"; 
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
const Header=()=>{
    const navigate=useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
    const handleSignout=()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            navigate("/error")
            // An error happened.
          });
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const {uid,email,displayName} = user;
              dispatch(addUser({uid:uid,email:email,displayName:displayName}))
              navigate("/browse")
            } else {
              dispatch(removeUser())
              navigate("/")
            }
          });
          return ()=>unsubscribe();
    },[dispatch, navigate])
    return (<div className="absolute flex justify-between w-screen px-8 py-2 bg-gradient-to-b from-black z-20">
        <img className="w-44" src={LOGO} alt="netflix" />
        {user && (<div className="flex p-2">
          
          <button onClick={handleSignout} className="font-bold text-white ">
            (Sign Out)
          </button>
        </div>)}
    </div>)
}

export default Header;