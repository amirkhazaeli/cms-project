import React from 'react'
import './Header.css'
import { BsSun } from 'react-icons/bs'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { useState } from 'react'
import { useEffect } from 'react'
export default function Header() {
    const [isDarkMode,setIsDarkMode] = useState(false)

    useEffect(()=>{
        if(isDarkMode){
          document.body.classList.add('dark-mode')
        }else{
            document.body.classList.remove('dark-mode')
        }
    },[isDarkMode])

    return (
        <div className='header'>
            <div className='admin-profile'>
                <img src={require('../../Assets/images/profile/Amir.jpeg')} alt="Profile" />
                <div>
                    <h1 className='admin-name'>امیر محمد عرب خزایلی</h1>
                    <h3 className='admin-job'>برنامه نویس فرانت اند</h3>
                </div>
            </div>
            <div className='header-left-section'>
                <div className='search-box'>
                    <input type="text" placeholder='جستجو کنید' />
                    <button>جست وجو</button>
                </div>
                <div className='icon'>
                    <IoIosNotificationsOutline />
                </div>
                <div className='icon' onClick={()=> setIsDarkMode(!isDarkMode)}>
                    <BsSun />
                </div>
            </div>
        </div>
    )
}
