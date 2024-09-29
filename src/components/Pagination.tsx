"use client"
import React from 'react'

const Pagination = () => {
  return (
    <div className='flex justify-between items-center w-full p-4 text-gray-500'>
        
        <button disabled className='bg-primary-light py-2 px-4 rounded-md text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed'>Prev</button>
        <div className='flex gap-2 items-center text-sm'>
            <button className='bg-color-3/10 px-2 rounded-md'>1</button>
            <button className=' px-2 rounded-md'>2</button>
            <button className=' px-2 rounded-md'>3</button>
            <button className=' px-2 rounded-md'>...</button>
            <button className=' px-2 rounded-md'>10</button>
        </div>
        <button className='bg-primary-light py-2 px-4 rounded-md text-xs font-semibold'>Next</button>
        
    </div>
  )
}

export default Pagination