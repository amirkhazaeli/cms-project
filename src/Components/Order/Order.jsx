import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { FiUsers } from 'react-icons/fi'
import ErrorBox from '../ErrorBox/ErrorBox'
export default function Order() {
  const [allOrder,setAllOrder] = useState([])
  useEffect(()=>{
    getAllOrder()
  },[])
  const getAllOrder = () => {
    axios.get("http://localhost:3000/api/orders/").then((res)=>{
      console.log(res.data)
      setAllOrder(res.data)
    })
  }
  return (
    <div>
      <div className='user-list-section table-section'>
        <h1 className='table-title'>
          <FiUsers />
          سفارشات
        </h1>
        <table>
          <thead>
            <tr>
              <th>نام محصول</th>
              <th>نام کابر</th>
              <th>تاریخ سفارش</th>
              <th>تخفیف</th>
              <th>تعداد</th>
              <th>قیمت</th>
              <th>عملیات</th>
            </tr>

          </thead>
          <tbody>
            {
              allOrder.length ? (
                <tr className='table-item'>
                <td>هدفون NIA</td>
                <td>علی</td>
                <td>1402-02-02</td>
                <td>10%</td>
                <td>2 عدد</td>
                <td>200,000 تومان</td>
                <td>
                  <button className='table-btn'>حذف</button>
                  <button className='table-btn'>ویرایش</button>
                  <button className='table-btn'>تایید</button>
                </td>
              </tr>
              ) : (
                <ErrorBox msg='سفارشی وجود ندارد'/>
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
