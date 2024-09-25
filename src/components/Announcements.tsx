import React from 'react'

const announcements = [
  {
    id: 1,
    title: 'New Policy Update',
    date: '2022-01-05',
    description: 'Please review the updated company policy document, .',
  },
  {
    id: 2,
    title: 'Holiday Schedule',
    date: '2022-02-10',
    description: 'The office will be closed on February 14th for Valentine\'s Day.',
  },
  {
    id: 3,
    title: 'New Employee Onboarding',
    date: '2022-03-01',
    description: 'Welcome our new team member, John Doe,.',
  },
  // Add more announcements as needed
];

const Announcements = () => {
  return (
    <div className='bg-white rounded-xl w-full h-auto'>
        <div className='flex items-center justify-between px-4 py-2'>
              <h1 className='font-bold'>Announcements</h1>
              <span className='text-xs text-gray-500 cursor-pointer hover:text-primary-light'>View All</span>
        </div>
        <div className='rounded-xl flex flex-col gap-2 p-4'>
              {announcements.map((item)=>(
                <div key={item.id} className='flex flex-col gap-2  p-3 rounded-xl cursor-pointer hover:shadow-md trasition duration-200 even:bg-color-3/10 odd:bg-primary-light/40'>
                    <div className='flex items-center justify-between'>
                    <h1 className='text-sm font-bold'>{item.title}</h1>
                    <span className='text-xs text-gray-500 bg-color-2/10 rounded-full px-2'>{item.date}</span>
                    </div>
                    <p className='text-sm text-gray-500 leading-4'>{item.description}</p>
                </div>
                
              ))}
        </div>
    </div>
  )
}

export default Announcements