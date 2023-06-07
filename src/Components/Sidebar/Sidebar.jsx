import React from 'react'
import './Sidebar.css'
import { AiOutlineHome } from 'react-icons/ai'
import {MdProductionQuantityLimits} from 'react-icons/md'
import {BiCommentDetail,BiBasket} from 'react-icons/bi'
import {FiUsers} from 'react-icons/fi'
import {BsCurrencyDollar} from 'react-icons/bs'

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <h1 className='sidebar-title'>به داشبورد خود خوش آمدید</h1>

            <ul className='sidebar-list'>
                <li>
                    <AiOutlineHome />
                    <span>صفحه اصلی</span>
                </li>
                <li className='active'>
                    <MdProductionQuantityLimits />
                    <span>محصولات</span>
                </li>
                <li>
                    <BiCommentDetail />
                    <span>کامنت ها</span>

                </li>
                <li>
                    <FiUsers />
                    <span>کاربران</span>

                </li>
                <li>
                    <BiBasket />
                    <span>سفارشات</span>
                </li>
                <li>
                    <BsCurrencyDollar />
                    <span>تخفیف ها</span>

                </li>
            </ul>
        </div>
    )
}
