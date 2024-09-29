import Announcements from '@/components/Announcements'
import BigCalendar from '@/components/BigCalendar'
import PerformanceChart from '@/components/PerformanceChart'
import Shortcuts from '@/components/Shortcuts'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiPhoneCall } from 'react-icons/bi'
import { FaBuildingFlag } from 'react-icons/fa6'
import { MdBloodtype, MdCoPresent, MdEmail, MdPlayLesson } from 'react-icons/md'
import { SiGoogleclassroom } from 'react-icons/si'
import { SlCalender } from 'react-icons/sl'
import { TbBrandChrome } from 'react-icons/tb'

const SingleTeacher = () => {
  return (
    <div className='flex-1 flex flex-col gap-3 p-4 xl:flex-row'>
            {/* letf */}
            <div className='w-full xl:w-2/3'>
                {/* info wrappper */}
                <div className='flex flex-col gap-3 lg:flex-row '>
                        {/* info card */}
                        <div className='py-6 px-4 rounded-md flex-1 flex  bg-primary-light/50 gap-4 '>
                            <div className=' w-1/3 '>
                            <Image src={"https://images.pexels.com/photos/709188/pexels-photo-709188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} alt='profile' height={144} width={144} className='h-36 w-36 rounded-full object-cover'/>
                                
                            </div>
                               
                                <div className=' w-2/3 flex flex-col  gap-2'>
                                
                                        <h1 className='font-bold'>John Doe</h1>
                                        <p className='text-xs text-gray-700'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, saepe.</p>


                                        <div className='flex items-center justify-between gap-2  text-xs font-medium'>
                                            <div className='w-full md:1/3 lg:w-full 2xl:w-1/3 flex gap-2 items-center '>
                                            <MdBloodtype size={20} />
                                            <h1>O+</h1>

                                            </div>
                                            <div className='w-full md:1/3 lg:w-full 2xl:w-1/3 flex gap-2 items-center'>
                                            <SlCalender size={20}/>
                                            <h1>January 2000</h1> 

                                            </div>
                                            <div className='w-full md:1/3 lg:w-full 2xl:w-1/3 flex gap-2 items-center'>
                                            <MdEmail size={20}/>
                                            <h1>4HbZU@example.com</h1> 
                                            </div>
                                            <div className='w-full md:1/3 lg:w-full 2xl:w-1/3 flex gap-2 items-center'>
                                                <BiPhoneCall size={20}/>
                                                <h1>123456789</h1>
                                            </div>
                                        </div>
                                </div>
                        </div>
                        {/* feature4s card */}
                        <div className='flex-1 flex gap-3 justify-between flex-wrap '>
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

                {/* teachers schedule */}
                <div className='mt-4 bg-white rounded-md p-4 h-[800px]'>
                    <h1>Teacher&apos;s Schedule</h1>
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

export default SingleTeacher