import React from 'react'
import { AiTwotoneMessage } from 'react-icons/ai'
import { BiMessage } from 'react-icons/bi'
import { GrAnnounce } from 'react-icons/gr'
import { IoIosSearch } from 'react-icons/io'

const Navbar = () => {
  return (
    <div className='  w-full flex items-center justify-between p-3 '>
        <div className='hidden md:flex items-center gap-2 rounded-full ring-1 ring-gray-300  px-2 '>
        <IoIosSearch size={20} color='gray' />
              <input type="text" placeholder='search' className='outline-none p-2  bg-transparent ' />  
        </div>

        <div className='flex items-center gap-5 w-full justify-end'>
                <div className='bg-white rounded-full p-1 cursor-pointer'>
                <AiTwotoneMessage size={25}/>
                </div>
                <div className='bg-white rounded-full p-1 relative cursor-pointer'>
                <GrAnnounce size={25}/>
                <div className='absolute -top-3 -right-3 rounded-full bg-green-800 text-white h-5 w-5 flex items-center justify-center p-1 text-sm'>1</div>
                </div>

                <div className='flex flex-col cursor-pointer'>
                    <span className='font-semibold text-xs'>john doe</span>
                    <span className='text-[12px] text-gray-600 text-right'>admin</span>
                </div>

                <div className='bg-slate-500 rounded-full h-10 w-10 cursor-pointer'>

                </div>
        </div>
    </div>
  )
}

export default Navbar