"use client"
import { BsThreeDots } from "react-icons/bs";
import { PieChart, Pie, ResponsiveContainer } from "recharts";

const data = [
  { name: "Group A", value: 86 , fill:"#98BDFF"},
  { name: "Group B", value: 14 , fill:"#F3797E"},
  
];


const PerformanceChart = () => {
  return (
    <div className='bg-white rounded-xl p-4 h-80 relative'>
        <div className="flex justify-between items-center font-bold">
            <h1>Performance</h1>
            <BsThreeDots className="cursor-pointer hover:text-primary-light"/>
        </div>
        <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data}
            cx="50%"
            cy="50%"
            fill="#8884d8"
            innerRadius={80}
          />
        </PieChart>
      </ResponsiveContainer>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <span className="font-bold text-2xl">9.2</span>
                <h4 className="text-gray-500 text-xs">of total score</h4>
            </div>

            <h2 className="absolute bottom-16 left-0 p-3 right-0 m-auto text-center font-semibold">
                1st semester - 5th semester
            </h2>
    </div>
  )
}

export default PerformanceChart