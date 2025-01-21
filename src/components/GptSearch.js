import React from 'react'
import GptSearchBar from './GptSearchBar'
import { BackGroundImage } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
        <div className='absolute -z-10'>
        <img src={BackGroundImage} alt="body" />
        </div>  
      <GptSearchBar />
    </div>
  )
}

export default GptSearch
