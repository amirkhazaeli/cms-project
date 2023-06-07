import React from 'react'
import './Sidebar.css'
import { AiOutlineHome } from 'react-icons/ai'
import { MdProductionQuantityLimits } from 'react-icons/md'
import { BiCommentDetail, BiBasket } from 'react-icons/bi'
import { FiUsers } from 'react-icons/fi'
import { BsCurrencyDollar } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <h1 className='sidebar-title'>به داشبورد خود خوش آمدید</h1>

            <ul className='sidebar-list'>
                <li>
                    <Link to='/'>
                        <AiOutlineHome />
                        <span>صفحه اصلی</span>
                    </Link>
                </li>
                <li className='active'>
                    <Link to='/product'>
                        <MdProductionQuantityLimits />
                        <span>محصولات</span>
                    </Link>
                </li>
                <li>
                    <Link to='/comments'>
                        <BiCommentDetail />
                        <span>کامنت ها</span>
                    </Link>
                </li>
                <li>
                    <Link to='/users' >
                        <FiUsers />
                        <span>کاربران</span>
                    </Link>
                </li>
                <li>
                    <Link to='/order'>
                        <BiBasket />
                        <span>سفارشات</span>
                    </Link>
                </li>
                <li>
                    <Link to='/offs'>
                        <BsCurrencyDollar />
                        <span>تخفیف ها</span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}
