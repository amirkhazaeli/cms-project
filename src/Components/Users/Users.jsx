import React from 'react'
import { FiUsers } from 'react-icons/fi'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import ErrorBox from '../ErrorBox/ErrorBox'
export default function Users() {
  const [allUsers,setAllUsers] = useState([]);

  useEffect(() => {
    getAllUser()
  },[])

  const getAllUser = () => {
    axios.get('http://localhost:3000/api/users/').then((res)=>{
      console.log(res.data)
      setAllUsers(res.data)
    })
  }
  return (
    <div className='user-list-section table-section'>
      <h1 className='table-title'>
        <FiUsers />
        لیست کاربران
      </h1>
      <table>
        <thead>
          <tr>
            <th>نام نام خانوادگی</th>
            <th>نام کاربری</th>
            <th>رمز عبور</th>
            <th>شماره تماس</th>
            <th>ایمیل</th>
            <th>ایمیل</th>
          </tr>

        </thead>
        <tbody>
          {
            allUsers.length ? (
               allUsers.map((user)=>(
                <tr className='table-item'>
                <td>{user.firsname} {user.lastname}</td>
                <td>{user.username}</td>
                <td>{user.password}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>
                  <button className='table-btn'>حذف</button>
                  <button className='table-btn'>ویرایش</button>
                </td>
              </tr>
               ))

            ):(

              <ErrorBox msg='کاربری یافت نشد' />
            )
          }
        
        </tbody>
      </table>
    </div>
  )
}
