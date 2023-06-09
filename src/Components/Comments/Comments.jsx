import React from 'react'
import './Comments.css'
import { AiOutlineComment } from 'react-icons/ai'
export default function Comments() {
  return (
    <div className='comments-section'>
      <h1 className='comment-title'>
        <AiOutlineComment />
        کامنت های کاربران

      </h1>
      <table>
        <thead>
          <tr>
            <th>اسم کاربر</th>
            <th>نام محصول</th>
            <th>کامنت</th>
            <th>تاریخ</th>
            <th>ساعت</th>
            <th>عملیات ها</th>
          </tr>

        </thead>
        <tbody>
          <tr className='comment-item'>
            <td>علی</td>
            <td>شارژر</td>
            <td>
              <button className='table-btn'>ویرایش</button>
            </td>
            <td>
              1402/02/02
            </td>
            <td>
              12:29
            </td>
            <td>
              <button className='table-btn'>حذف</button>
              <button className='table-btn'>ویرایش</button>
              <button className='table-btn'>پاسخ</button>
              <button className='table-btn'>تایید</button>
            </td>
          </tr>
          <tr className='comment-item'>
            <td>علی</td>
            <td>شارژر</td>
            <td>
              <button className='table-btn'>ویرایش</button>
            </td>
            <td>
              1402/02/02
            </td>
            <td>
              12:29
            </td>
            <td>
              <button className='table-btn'>حذف</button>
              <button className='table-btn'>ویرایش</button>
              <button className='table-btn'>پاسخ</button>
              <button className='table-btn'>تایید</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
