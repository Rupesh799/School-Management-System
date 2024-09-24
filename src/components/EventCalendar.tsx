"use client"
import React from 'react'
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];
const EventCalendar = () => {
    const [value, onChange] = useState<Value>(new Date())
  return (
    <div className='bg-white rounded-lg p-4 w-full'>
        <Calendar onChange={onChange} value={value} className="border-none"/>
    </div>
  )
}

export default EventCalendar