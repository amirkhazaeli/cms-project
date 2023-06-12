import React, { useState } from 'react'
import './AdminInfo.css'
import profileImage from '../../Assets/images/profile/Amir.jpeg'
import { IoExitOutline } from 'react-icons/io5'
import { AiOutlineUserAdd } from 'react-icons/ai'
import Modal from '../Modal/Modal'
export default function AdminInfo() {
    const [showExitModal, setShowEditModal] = useState(false)
    const [showEditAdminInfoModal, setShowEditAdminInfoModal] = useState(false)
    const exitModalCancelAction = () => {
        setShowEditModal(false)
    }
    const editAdminInfoModalCancelAction = () => {
        setShowEditAdminInfoModal(false)
    }
    return (
        <>
            <div className='admin-info'>
                <div className='admin-info-right-section'>
                    <img src={profileImage} alt="image" />
                    <h1 className='admin-name'>امیر محمد عرب خزایلی</h1>
                    <div className='info-btns'>
                        <button className='change-info' onClick={() => setShowEditAdminInfoModal(true)}>
                            <AiOutlineUserAdd />
                            تغییر اطلاعات
                        </button>
                        <button className='exit-account' onClick={() => setShowEditModal(true)}>
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
            {
                showExitModal ? (
                    <Modal modalClose={exitModalCancelAction}>
                        <h1>ایا مطمین هستید؟</h1>
                        <button onClick={exitModalCancelAction}>بله</button>
                        <button onClick={exitModalCancelAction}>خیر</button>
                    </Modal>
                ) : null
            }
            {
                showEditAdminInfoModal ? (
                    <Modal modalClose={editAdminInfoModalCancelAction}>
                        <h1>اطلاعات خود را ویرایش کنید</h1>
                        <div className='edit-inputes'>
                            <div className='edit-input-group'>
                                <label htmlFor="">نام و نام خانوادگی :</label>
                                <input type="text" placeholder='نام خود را وارد کنید' />
                            </div>
                            <div className='edit-input-group'>
                                <label htmlFor="">تحصیلات :</label>
                                <input type="text"  placeholder='تحصیلات خود را وارد کنید'/>
                            </div>
                            <div className='edit-input-group'>
                                <label htmlFor="">سن :</label>
                                <input type="text"  placeholder='سن خود را وارد کنید'/>
                            </div>
                            <div className='edit-input-group'>
                                <label htmlFor="">شغل :</label>
                                <input type="text"  placeholder='شغل خود را وارد کنید'/>
                            </div>
                        </div>
                        <button onClick={editAdminInfoModalCancelAction}>ثبت اطلاعات</button>
                        <button onClick={editAdminInfoModalCancelAction}>انصراف</button>
                    </Modal>
                ) : null
            }
        </>
    )
}
