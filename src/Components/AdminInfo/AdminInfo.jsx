import React from 'react'
import './AdminInfo.css'
import profileImage from '../../Assets/images/profile/Amir.jpeg'
import { IoExitOutline } from 'react-icons/io5'
import { AiOutlineUserAdd } from 'react-icons/ai'
export default function AdminInfo() {
    return (
        <div className='admin-info'>
            <div className='admin-info-right-section'>
                <img src={profileImage} alt="image" />
                <h1 className='admin-name'>امیر محمد عرب خزایلی</h1>
                <div className='info-btns'>
                    <button className='change-info'>
                        <AiOutlineUserAdd />
                        تغییر اطلاعات
                    </button>
                    <button className='exit-account'>
                        <IoExitOutline />
                        خروج
                    </button>
                </div>
            </div>
            <div className='admin-info-left-section'>
                <div className='info-group'>
                    <span>شغل :</span>
                    <span>برنامه نویس فرانت اند</span>
                </div>
                <div className='info-group'>
                    <span>تحصیلات :</span>
                    <span>دانشجو کارشناسی</span>
                </div>
                <div className='info-group'>
                    <span>سن :</span>
                    <span>21</span>
                </div>
                <div className='info-group'>
                    <span>وضعیت :</span>
                    <span>انلاین</span>
                </div>
            </div>
        </div>
    )
}
