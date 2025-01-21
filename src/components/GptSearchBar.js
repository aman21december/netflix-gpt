import React from 'react'

const GptSearchBar = () => {
  return (
    <div className='flex justify-center'>
      <form className='pt-[10%] grid w-1/2 grid-cols-12'>
        <input type="text" className=" m-4 p-4 col-span-9"placeholder='What would you like to watch today?'/>
        <button className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg'>Search</button>
      </form>
    </div>
  )
}

export default GptSearchBar
