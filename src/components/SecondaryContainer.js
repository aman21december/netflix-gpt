import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
        const movies=useSelector(store=>store.movies)
        console.log(movies)
  return (
    movies.nowPlayingMovies &&  (<div className='bg-black'>    <div className="-mt-52 pl-12 relative z-20">
   <div>
      <MovieList movies={movies.nowPlayingMovies} title="Now Playing" />
      <MovieList title={"Popular Movies"} movies={movies.popularMovies}/>
      <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
    </div>
    </div>
    </div>)

  )
}

export default SecondaryContainer
