"use client"
import {
    RadialBarChart,
    RadialBar,
    Legend,
    PolarRadiusAxis,
    PolarAngleAxis,
    ResponsiveContainer,
  } from "recharts";
import React from 'react'
import { BsThreeDots } from "react-icons/bs";
import Image from "next/image";

const data = [
    {
        name: "Total",
        count: 44,
        fill: "white",
      },
    {
      name: "Boys",
      count: 18,
      fill: "#98BDFF",
    },
    {
      name: "Firls",
    count: 26,
      fill: "#F3797E",
    },
    
  ];
  
 
const Chart = () => {
  return (
    <div className="bg-white rounded-xl p-4 w-full h-full shadow-md hover:shadow-sm cursor-pointer">
        <div className="flex items-center justify-between ">
            <h1 className="font-bold ">Students</h1>
            <BsThreeDots className="font-bold cursor-pointer hover:text-primary-light"/>
        </div>
        <div className=" relative flex justify-center items-center w-full h-[75%]">
        <ResponsiveContainer >
        <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={32} data={data}>
          <RadialBar
            background
            dataKey="count"
          />
        </RadialBarChart>
      </ResponsiveContainer>
      <Image src={'/male_female.png'} alt="pic" width={50} height={50} className="absolute"/>
    
        </div>
        <div className="flex  justify-center gap-10 text-left ">
            <div className="flex flex-col items-center justify-center">
                    <div className="bg-primary-light h-5 w-5 rounded-full fklex justify-center"></div>
                    <span className="font-bold text-center">1234</span>
                    <span className="text-sm text-gray-400 text-center">Boys(45%)</span>
            </div>
            <div className="flex flex-col items-center justify-center">
            <div className="bg-color-3 h-5 w-5 rounded-full"></div>
                    <span className="font-bold ">1234</span>
                    <span className="text-sm text-gray-400">Girls(55%)</span>
            </div>
        </div>
    </div>
  )
}

export default Chart