import Announcements from '@/components/Announcements'
import BigCalendar from '@/components/BigCalendar'
import EventCalendar from '@/components/EventCalendar'
import React from 'react'

const StudentPage = () => {
  return (
    <div className='p-4 flex gap-3 flex-col md:flex-row'>
      {/* left */}
      <div className='w-full lg:w-2/3 '>
      <div className='h-full bg-white rounded-xl p-4'>

        <h1 className='font-bold'>Schedule</h1>
          <BigCalendar/>
      </div>
      </div>

      {/* right */}
      <div className='flex flex-col gap-3 w-full lg:w-1/3'>
        <EventCalendar/>
        <Announcements/>
      </div>
    </div>
  )
}

export default StudentPage