import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({movie}) => {
  if(!movie.backdrop_path)return null
  return (
    <div className='w-48 pr-4'>
     <img src={IMG_CDN_URL+movie.backdrop_path} alt="movie logo" /> 
    </div>
  )
}

export default MovieCard
