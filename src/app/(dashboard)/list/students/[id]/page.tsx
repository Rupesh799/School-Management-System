import Announcements from '@/components/Announcements'
import BigCalendar from '@/components/BigCalendar'
import PerformanceChart from '@/components/PerformanceChart'
import Shortcuts from '@/components/Shortcuts'
import Image from 'next/image'
import React from 'react'
import { BiPhoneCall } from 'react-icons/bi'
import { FaBuildingFlag } from 'react-icons/fa6'
import { MdBloodtype, MdCoPresent, MdEmail, MdMarkEmailRead, MdPlayLesson } from 'react-icons/md'
import { SiGoogleclassroom } from 'react-icons/si'
import { SlCalender } from 'react-icons/sl'

const SingleStudent = () => {
  return (
    <div className='felx-1 flex flex-col xl:flex-row gap-2 p-4 '>
            {/* right */}
            <div className='w-full xl:w-2/3'>
                {/* info section */}
                <div className='flex flex-col md:flex-row gap-3 '>
                    {/* info card */}
                    <div className='flex flex-1 gap-4 p-3 bg-primary-light/50 rounded-lg ' >
                            <div className='w-1/3'>
                                <Image src={'/s1.jpg'} alt='profile' height={100} width={100} className='rounded-full h-20 w-20 object-cover'/>  
                            </div>
                            <div className='w-2/3 flex flex-col justify-between gap-2'>
                                    <h1>Harry Smith</h1>
                                    <p className='text-xs text-gray-700'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, saepe.</p>

                                    <div className='flex justify-between items-center gap-2 text-xs font-medium flex-wrap  p-2'>
                                    <div className='w-full md:1/3 lg:w-full 2xl:w-1/3 flex gap-2 items-center '>
                                            <MdBloodtype size={20} />
                                            <h1>O+</h1>

                                            </div>
                                            <div className='w-full md:1/3 lg:w-full 2xl:w-1/3 flex gap-2 items-center'>
                                            <SlCalender size={20}/>
                                            <h1>January 2000</h1> 

                                            </div>
                                            <div className='w-full md:1/3 lg:w-full 2xl:w-1/3 flex gap-2 items-center'>
                                            <MdMarkEmailRead size={20}/>
                                            <h1>4HbZU@example.com</h1> 
                                            </div>
                                            <div className='w-full md:1/3 lg:w-full 2xl:w-1/3 flex gap-2 items-center'>
                                                <BiPhoneCall size={20}/>
                                                <h1>123456789</h1>
                                            </div>
                                    </div>
                            </div>
                    </div>

                    {/* features card */}
                    <div className='flex-1 flex flex-wrap gap-3 justify-between'>
                    <div className='bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]'>
                                    <MdCoPresent color='#4B49AC' size={20}/>
                                    <div className='flex flex-col '>
                                    <span className='font-bold text-xl'>90% </span>
                                    <small className="text-gray-500">Attendance</small>

                                    </div>
                                </div>

                                <div className='bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]'>
                                    <FaBuildingFlag color='#7978E9' size={20}/>
                                    <div className='flex  flex-col'>
                                    <span className='font-bold text-xl'>3</span>
                                    <small className="text-gray-500">Branches</small>

                                    </div>
                                </div>

                                <div className='bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]'>
                                    <MdPlayLesson color='#F3797E' size={20}/>
                                    <div className='flex flex-col '>
                                    <span className='font-bold text-xl'>10</span>
                                    <small className="text-gray-500">lessons</small>

                                    </div>
                                </div>

                                <div className='bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]'>
                                    <SiGoogleclassroom color='#98BDFF' size={20}/>
                                    <div className='flex  flex-col'>
                                    <span className='font-bold text-xl'>5 </span>
                                    <small className="text-gray-500">Classes</small>

                                    </div>
                                </div>
                    </div>
                </div>


                {/* schedule */}
                <div className='bg-white rounded-md p-4 mt-3 h-[665px]'>
                        <BigCalendar/>
                </div>
            </div>

            {/* right */}
            <div className='w-full xl:w-1/3 flex flex-col gap-3'>
                <Shortcuts/>
                <PerformanceChart/>
                <Announcements/>
            </div>
    </div>
  )
}

export default SingleStudent