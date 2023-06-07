import React from 'react'
import './Header.css'
import { BsSun } from 'react-icons/bs'
import { IoIosNotificationsOutline } from 'react-icons/io'
export default function Header() {
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
                <div className='icon'>
                    <BsSun />
                </div>
            </div>
        </div>
    )
}
