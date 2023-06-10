import React from 'react'
import Activitys from '../Activitys/Activitys'
import AdminInfo from '../AdminInfo/AdminInfo'
import Chart from '../Chart/Chart'
import WelcomeBox from '../WelcomeBox/WelcomeBox'
import './Home.css'
export default function Home() {
  return (
    <div className='Home-section'>
      <div className='top-section'>
        <WelcomeBox />
        <AdminInfo />
      </div>
      <div className='main-section'>
        <Chart />
        <Activitys />
      </div>
    </div>
  )
}
