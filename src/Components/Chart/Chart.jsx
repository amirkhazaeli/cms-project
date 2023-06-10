import React from 'react'
import './Chart.css'
import { BarChart,Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,  } from 'recharts';
import {ChartData} from '../../Assets/data/ChartData.js'
import {AiOutlineLineChart} from 'react-icons/ai'
export default function Chart() {
    return (
        <div className='chart'>
            <h1 className='chart-title'>
            <AiOutlineLineChart />
            نمودار فروش
            </h1>
            <BarChart width={630} height={350} data={ChartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
        </div>
    )
}
