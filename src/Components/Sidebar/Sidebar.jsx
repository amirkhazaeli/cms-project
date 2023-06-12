import React, { useState } from 'react'
import './Sidebar.css'
import { AiOutlineHome } from 'react-icons/ai'
import { MdProductionQuantityLimits } from 'react-icons/md'
import { BiCommentDetail, BiBasket } from 'react-icons/bi'
import { FiUsers } from 'react-icons/fi'
import {IoExitOutline} from 'react-icons/io5'
import { Link, NavLink } from 'react-router-dom'
import Modal from '../Modal/Modal'

export default function Sidebar() {
    const [showExitModal,setShowExitModal] = useState(false)
    const activeClassHandler = (event) => {
        console.log(event.target);
    }
    const exitModalCancelAction = () =>{
        setShowExitModal(false)
    }
    return (
        <>
        <div className='sidebar'>
            <h1 className='sidebar-title'>به داشبورد خود خوش آمدید</h1>

            <ul className='sidebar-list' onClick={(event) => activeClassHandler(event)}>
                <li>
                    <NavLink to='/'>
                        <AiOutlineHome />
                        <span>صفحه اصلی</span>
                    </NavLink>
                </li>
                <li className='active'>
                    <NavLink to='/product'>
                        <MdProductionQuantityLimits />
                        <span>محصولات</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/comments'>
                        <BiCommentDetail />
                        <span>کامنت ها</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/users' >
                        <FiUsers />
                        <span>کاربران</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/order'>
                        <BiBasket />
                        <span>سفارشات</span>
                    </NavLink>
                </li>
                <li onClick={()=> setShowExitModal(true)}>
                    <Link>
                        <IoExitOutline />
                        <span>خروج</span>
                    </Link>
                </li>
            </ul>
        </div>
        {
            showExitModal ? (
         <Modal modalClose={exitModalCancelAction}>
            <h1>ایا مطمین هستین؟</h1>
            <button onClick={exitModalCancelAction} >بله</button>
            <button onClick={exitModalCancelAction}>خیر</button>
         </Modal>
            ) : null
        }
        </>
    )
}
