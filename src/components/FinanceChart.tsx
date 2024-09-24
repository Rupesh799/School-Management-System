"use client"
import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const data = [
    {
      name: 'Jan',
      income: 4000,
      expense: 2400,
      amt: 2400,
    },
    {
      name: 'Feb',
      income: 3000,
      expense: 1398,
      amt: 2210,
    },
    {
      name: 'Mar',
      income: 2000,
      expense: 9800,
      amt: 2290,
    },
    {
      name: 'Apr',
      income: 2780,
      expense: 3908,
      amt: 2000,
    },
    {
      name: 'May',
      income: 1890,
      expense: 4800,
      amt: 2181,
    },
    {
      name: 'Jun',
      income: 2390,
      expense: 3800,
      amt: 2500,
    },
    {
      name: 'Jul',
      income: 3490,
      expense: 4300,
      amt: 2100,
    },
    {
      name: 'Aug',
      income: 3000,
      expense: 1398,
      amt: 2210,
    },
    {
      name: 'Sep',
      income: 2000,
      expense: 9800,
      amt: 2290,
    },
    {
      name: 'Oct',
      income: 2780,
      expense: 3908,
      amt: 2000,
    },
    {
      name: 'Nov',
      income: 1890,
      expense: 4800,
      amt: 2181,
    },
    {
      name: 'Dec',
      income: 2390,
      expense: 3800,
      amt: 2500,
    },
  ];

const FinanceChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full shadow-md hover:shadow-sm mt-4 p-4">
      <div className="flex items-center justify-between font-bold  px-4">
        <h1>Finance</h1>
        <BsThreeDots />

       
      </div>
      <div className="w-full h-[90%]">
      <ResponsiveContainer>
        <LineChart
          width={500}
          height={300}
          data={data}
        
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd"/>
          <XAxis dataKey="name" axisLine={false} tick={{fill:"#d1d5db"}}/>
          <YAxis axisLine={false} tick={{fill:"#d1d5db"}}/>
          <Tooltip />
          <Legend align='center'
      verticalAlign='top'
      wrapperStyle={{paddingTop:"5px", paddingBottom:"10px"}}
      />
          <Line type="monotone" dataKey="expense" stroke="#F3797E" activeDot={{ r: 8 }} strokeWidth={3}/>
          <Line type="monotone" dataKey="income" stroke="#4B49AC " strokeWidth={3}/>
        </LineChart>
      </ResponsiveContainer>
      </div>
      
      {/* #*/}
    </div>
  );
};

export default FinanceChart;
