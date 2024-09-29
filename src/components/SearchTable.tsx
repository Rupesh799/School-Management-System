import React from 'react'
import { IoIosSearch } from 'react-icons/io'

const SearchTable = () => {
  return (
    <div className='w-full md:w-auto flex items-center gap-2 rounded-full ring-1 ring-gray-300  px-2 '>
        <IoIosSearch size={20} color='gray' />
              <input type="text" placeholder='search' className='outline-none px-1  bg-transparent ' />  
        </div>
  )
}

export default SearchTable