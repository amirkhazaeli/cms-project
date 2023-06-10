import React from 'react'
import './Sidebar.css'
import { AiOutlineHome } from 'react-icons/ai'
import { MdProductionQuantityLimits } from 'react-icons/md'
import { BiCommentDetail, BiBasket } from 'react-icons/bi'
import { FiUsers } from 'react-icons/fi'
import { BsCurrencyDollar } from 'react-icons/bs'
import { Link, NavLink } from 'react-router-dom'

export default function Sidebar() {
    const activeClassHandler = (event) =>{
       console.log(event.target);
    }
    return (
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
                <li>
                    <NavLink to='/offs'>
                        <BsCurrencyDollar />
                        <span>تخفیف ها</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}
