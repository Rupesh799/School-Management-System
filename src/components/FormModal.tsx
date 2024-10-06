"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import { CgClose } from 'react-icons/cg';
import TeacherFrom from './forms/TeacherFrom';
import { create } from 'domain';

const FormModal = ({
    table,type,data,id
}
:{
    table: 
    "teacher" |
    "student" |
    "parent" |
    "subject" |
    "class" |
    "lesson" |
    "exam" |
    "assignment" |
    "results" |
    "attendance" |
    "event" |
    "announcement" ;
    type:"create" | "update" | "delete";
    data?:any;
    id?:number;

   
}
) => {

    const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
    const bgColor = type === "create" ? "bg-primary-light" : type === "update"? "bg-primary-light" :"bg-color-3 text-white "

    const[open, setOpen] = useState(false);

    const Form =()=>{
      return type === "delete" && id ? (

        <form action="" className='p-4 flex flex-col gap-3 justify-center items-center'>
          <span>Are you sure want to delete this {table}?</span>
          <button className='bg-color-3/90 border-none  text-white rounded-md px-3 py-2 hover:bg-color-3 font-semibold'>Delete</button>
        </form>
      ):(
        <TeacherFrom type="create"/>
      )
    }

  return (
    <div>
        <button className={`${size} flex items-center justify-center rounded-full  ${bgColor}`} onClick={()=>setOpen(true)}>
                <Image src={`/${type}.png`} alt='icon' width={14} height={14}/>
        </button>

        {
          open && (
            <div className='bg-black bg-opacity-50 w-screen h-screen absolute top-0 left-0 z-50 flex justify-center items-center'>
              <div className='bg-white p-4 rounded-md relative  w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]'>
              <Form/>

                <div className='absolute top-3 right-4 cursor-pointer' onClick={()=>setOpen(false)}>
                <CgClose color='black' size={20}/>
              </div>
              </div>
             
            </div>
          )
        }
    </div>
  )
}

export default FormModal