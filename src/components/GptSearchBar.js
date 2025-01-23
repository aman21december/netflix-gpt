import React, { useRef, useState } from 'react'
import openai from '../utils/openai'
import { API_Options } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addGptMovieResult } from '../utils/gptSlice';
const GptSearchBar = () => {
    const dispatch=useDispatch();
    const[errMsg,setErrMsg]=useState(null);
    const searchText=useRef(null)
    const searchMovieTMDB = async(movie)=>{
      const data =await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1",API_Options);
      const json= await data.json();
      return json.results;
    }  
    const handleGptSearchClick=async ()=>{
        
        const gptQuery =
            "Act as a Movie Recommendation system and suggest some movies for the query : " +
            searchText.current.value +
            ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

        const gptResult = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            store: true,
            messages: [
              {"role": "user", "content": gptQuery},
            ],
          });
          if(!gptResult.choices){
            setErrMsg("no movies found")
          }
        
          const gptMovies=gptResult.choices?.[0]?.message?.content.split(",")
          const promiseArray = gptMovies.map(movie=>searchMovieTMDB(movie))
       
          const tmdbResult=await Promise.all(promiseArray)

          console.log(tmdbResult)
          dispatch(addGptMovieResult({movieNames:gptMovies,movieResults:tmdbResult}))          
    }
  return (
    <div className='flex justify-center'>
      <form className='pt-[10%] grid w-1/2 grid-cols-12' onSubmit={(e)=>{e.preventDefault()}}>
        <input ref={searchText} type="text" className=" m-4 p-4 col-span-9"placeholder='What would you like to watch today?'/>
        <button onClick={handleGptSearchClick} className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg'>Search</button>
        <p className='text-white w-64 bg-red-500 ml-4'>{errMsg}</p>
      </form>
    </div>
  )
}

export default GptSearchBar
