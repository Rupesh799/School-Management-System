"use client"
import React from 'react'
import { BsThreeDots } from 'react-icons/bs'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Rectangle,
    ResponsiveContainer,
  } from "recharts";
  
  const data = [
    {
      name: "Sun",
      Present: 40,
      Absent: 12,
      
    },
    {
      name: "Mon",
      Present: 30,
      Absent: 13,
      
    },
    {
      name: "Tue",
      Present: 25,
      Absent: 19,
      
    },
    {
      name: "Wed",
      Present: 27,
      Absent: 31,
      
    },
    {
      name: "Thu",
      Present: 18,
      Absent: 48,
      
    },
    {
      name: "Fri",
      Present: 23,
      Absent: 32,
      
    },
    
  ];
  

const AttendenceChart = () => {
  return (
    <div className='bg-white p-4 rounded-xl shadow-md w-full h-full'>
        <div className='flex items-center justify-between'>
            <h1 className='font-bold '>Attendence</h1>
            <BsThreeDots/>
        </div>
        
          <ResponsiveContainer width={"100%"} height={"90%"}>
            
        <BarChart
      width={500}
      height={300}
      data={data}
      barSize={10}
     
      >
      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd'/>
      <XAxis dataKey="name" axisLine={false} tick={{fill:"#d1d5db"}}/>
      <YAxis axisLine={false} tick={{fill:"#d1d5db"}}/>
      <Tooltip />
      <Legend 
      align='left'
      verticalAlign='top'
      wrapperStyle={{paddingTop:"10px", paddingBottom:"40px"}}
      
      />
      <Bar
      radius={[10,10,0,0]}
       dataKey="Present"
       fill="#98BDFF"
       legendType='circle'
       />
      <Bar
      radius={[10,10,0,0]}

       dataKey="Absent"
       fill="#F3797E"
       legendType='circle'
       />
    </BarChart>
       </ResponsiveContainer>
   
        </div>
    
  )
}

export default AttendenceChart