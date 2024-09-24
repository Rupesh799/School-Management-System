import Chart from '@/components/Chart'
import UserCard from '@/components/UserCard'
import React from 'react'

const AdminPage = () => {
  return (
    <div className='p-4 flex flex-col gap-4 md:flex-row'>
      {/* left */}
      <div className='w-full lg:w-3/4  h-screen'>
          <div className='grid grid-cols-2 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-3 '>
              <UserCard type='teacher'/>
              <UserCard type='students'/>
              <UserCard type='parents'/>
              <UserCard type='staff' />
          </div>
          <div className='flex flex-col lg:flex-row gap-4 '>
            <div className='w-full lg:w-1/3 h-[350px]'>
          <Chart/>
            </div>
            <div className='w-full lg:w-2/3 h-[350px]'>

            </div>

          </div>
      </div>
      {/* right */}
      <div className='w-full lg:w-1/4 bg-blue-400'>
      right
      </div>
    </div>
  )
}

export default AdminPage