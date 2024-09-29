import Link from 'next/link'
import React from 'react'

const Shortcuts = () => {
  return (
    <div className='bg-white rounded-xl p-4'>
                    <h1 className='font-bold'>Shortcuts</h1>
                    <div className='mt-3 flex flex-wrap  gap-3 text-xs text-gray-500'>
                        <Link className='p-3 rounded-lg bg-primary/5 hover:shadow-md' href={""}>Teacher&apos;s Classes</Link>
                        <Link className='p-3 rounded-lg bg-primary-light/50 hover:shadow-md' href={""}>Teacher&apos;s Asignments</Link>
                         <Link className='p-3 rounded-lg bg-color-2/10 hover:shadow-md' href={""}>Teacher&apos;s Exams</Link> 
                         <Link className='p-3 rounded-lg bg-color-3/10 hover:shadow-md' href={""}>Teacher&apos;s Students</Link>

                         <Link className='p-3 rounded-lg bg-color-2/50 hover:shadow-md' href={""}>Teacher&apos;s Lessons</Link>
                    </div>
                </div>
  )
}

export default Shortcuts