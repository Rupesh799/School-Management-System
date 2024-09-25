"use client"
import React from 'react'
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { BsThreeDots } from 'react-icons/bs';


type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
  {
    id: 1,
    title: 'Meeting',
    time: '7 A.M - 4 P.M',
    description: 'Discuss project plans',
  },
  {
    id: 2,
    title: 'Conference',
    time: '7 A.M - 4 P.M',
    description: 'Present research findings',
  },
  {
    id: 3,
    title: 'Party',
    time: '7 A.M - 4 P.M',
    description: 'Celebrate the end of the quarter',
  },
  // Add more events as needed
];
const EventCalendar = () => {
    const [value, onChange] = useState<Value>(new Date())
  return (
    <div className='bg-white rounded-lg p-4 w-full'>
        <Calendar onChange={onChange} value={value} className="border-none"/>

        <div className='flex flex-col gap-2 '>
          <div className='flex justify-between items-center font-bold mt-3 px-2'>
            <h1>Events</h1>
            <BsThreeDots className='cursor-pointer hover:text-primary-light'/>
          </div>
          {events.map((items)=>(
            <div key={items.id} className='flex flex-col gap-3 border border-gray-500/10 rounded-xl p-3 border-t-4 even:border-t-primary-light odd:border-t-color-3 cursor-pointer hover:shadow-md trasition duration-200' >
                <div className='flex justify-between items-center '>
                    <h1 className='font-semibold text-sm'>{items.title}</h1>
                    {/* <BsThreeDots/> */}
                    <span className='text-xs text-gray-400 leading-1'>{items.time}</span>
                </div>
                <p className='text-gray-500 text-sm'>{items.description}</p>
            </div>
          ))}
        </div>
    </div>
  )
}

export default EventCalendar