import React from 'react'
import { BsThreeDots } from 'react-icons/bs'

const UserCard = ({type}:{type:string}) => {
  return (
    <div className='rounded-xl even:bg-color-1 odd:bg-color-3  p-4 text-white flex flex-col gap-3 min-w-[120px]'>
            <div className='flex justify-between items-center '>
                <span className='text-xs bg-white/10 rounded-full py-1 px-2'>2024/09</span>
                <BsThreeDots size={15} className='cursor-pointer hover:text-primary font-bold'/>
            </div>
            <h4 className='font-bold p-2 text-xl'>1212323</h4>
            <span className='px-2 text-gray-200'>{type}</span>
    </div>
  )
}

export default UserCard