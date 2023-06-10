import React from 'react'
import AdminInfo from '../AdminInfo/AdminInfo'
import WelcomeBox from '../WelcomeBox/WelcomeBox'
import './Home.css'
export default function Home() {
  return (
    <div className='Home-section'>
      
    <WelcomeBox />
    <AdminInfo />
    </div>
  )
}
