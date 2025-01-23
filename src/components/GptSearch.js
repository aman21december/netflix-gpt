import React from 'react'
import GptSearchBar from './GptSearchBar'
import { BackGroundImage } from '../utils/constants'
import GptMovieSuggestions from './GptMovieSuggestions'

const GptSearch = () => {
  return (
    <div>
        <div className='fixed -z-10'>
        <img src={BackGroundImage} alt="body" />
        </div>  
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  )
}

export default GptSearch
