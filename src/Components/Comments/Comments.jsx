import React from 'react'
import './Comments.css'
import { AiOutlineComment } from 'react-icons/ai'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import ErrorBox from '../ErrorBox/ErrorBox'
export default function Comments() {
  const [allComments, setAllComments] = useState([])
  useEffect(() => {
    getAllComments()
  },[])

  const getAllComments = () => {
    axios.get('http://localhost:3000/api/comments/').then((res) => {
      console.log(res.data);
      setAllComments(res.data)
    })
  }
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
          {
            allComments.length ? (
              allComments.map((comment) => (
                <tr className='comment-item'>
                  <td>{comment.userID}</td>
                  <td>{comment.productID}</td>
                  <td>
                    <button className='table-btn'>مشاهده</button>
                  </td>
                  <td>
                    {comment.date}
                  </td>
                  <td>
                    {comment.hour}
                  </td>
                  <td>
                    <button className='table-btn'>حذف</button>
                    <button className='table-btn'>ویرایش</button>
                    <button className='table-btn'>پاسخ</button>
                    <button className='table-btn'>تایید</button>
                  </td>
                </tr>
              ))
            ) : (
              <ErrorBox msg='هیچ کامنتی وجود ندارد' />
            )
          }

        </tbody>
      </table>
    </div>
  )
}
