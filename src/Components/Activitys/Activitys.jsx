import React from 'react'
import './Activitys.css'
import { GrNotification } from 'react-icons/gr'
export default function Activitys() {
    return (
        <div className='activity-section'>
            <h1 className='activity-title'>
                <GrNotification />
                فعالیت ها
            </h1>
            <div className='activity-item'>
                <div className='activity-item-title'>
                    <h1>محصول جدیدی اضافه شده است</h1>
                    <h3>هدفون NIA</h3>
                </div>
                <span className='activity-item-time'>
                    2 ساعت قبل
                </span>
            </div>
            <div className='activity-item'>
                <div className='activity-item-title'>
                    <h1>محصول جدیدی اضافه شده است</h1>
                    <h3>هدفون NIA</h3>
                </div>
                <span className='activity-item-time'>
                    2 ساعت قبل
                </span>
            </div>
        </div>
    )
}
