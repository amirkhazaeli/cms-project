import React from 'react'
import './Header.css'
import { BsSun } from 'react-icons/bs'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { useState } from 'react'
import { useEffect } from 'react'
import { AiOutlineCheckCircle } from 'react-icons/ai'
export default function Header() {
    const [isDarkMode, setIsDarkMode] = useState(false)
    const [showNotifBox, setShowNotifBox] = useState(false)
    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark-mode')
        } else {
            document.body.classList.remove('dark-mode')
        }
    }, [isDarkMode])

    const ShowNotifBoxHandler = () => {
        setShowNotifBox(true)
    }
    const hideNotifBoxHandler = () => {
       setShowNotifBox(false)
    }
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
                <div className='notification-icon icon' onMouseEnter={ShowNotifBoxHandler} onMouseLeave={hideNotifBoxHandler}>
                    <IoIosNotificationsOutline />
                    <div className='notif-count'>
                        2
                    </div>
                    {
                        showNotifBox ? (
                            <div className='notif-box'>
                            <h1>پیام ها</h1>
                            <div className='notif-item'>
                                <AiOutlineCheckCircle />
                                کاربر جدیدی ثبت نام کرده است
                                <span className='notif-item-date'>
                                    2 ساعت قبل
                                </span>
                            </div>
                            <div className='notif-item'>
                                <AiOutlineCheckCircle />
                                کاربر جدیدی ثبت نام کرده است
                                <span className='notif-item-date'>
                                    2 ساعت قبل
                                </span>
                            </div>
                            <div className='notif-item'>
                                <AiOutlineCheckCircle />
                                کاربر جدیدی ثبت نام کرده است
                                <span className='notif-item-date'>
                                    2 ساعت قبل
                                </span>
                            </div>
                        </div>
                        ) : null
                    }
               
                </div>
                <div className='icon' onClick={() => setIsDarkMode(!isDarkMode)}>
                    <BsSun />
                </div>
            </div>
        </div>
    )
}
