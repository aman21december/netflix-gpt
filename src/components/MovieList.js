import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
    if(!movies){
        return
    }
  return (
    <div className="px-6 ">
        <h1 className="text-3xl py-4 text-white">{title}</h1>
        <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex">
        {movies.map((movie)=>{return <MovieCard key={movie.id} movie={movie} />})}
        </div>
        </div>
    </div>
  )
}

export default MovieList
