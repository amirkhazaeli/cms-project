import React from 'react'
import './Comments.css'
import { AiOutlineComment } from 'react-icons/ai'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import ErrorBox from '../ErrorBox/ErrorBox'
import Modal from '../Modal/Modal'
export default function Comments() {
  const [showCommentModal, setShowCommentModal] = useState(false)
  const [showRemoveCommentModal, setShowRemoveCommentModal] = useState(false)
  const [showEditCommentModal,setShowEditCommentModal] = useState(false)
  const [allComments, setAllComments] = useState([])
  const [selectComment, setSelectComment] = useState()
  useEffect(() => {
    getAllComments()
  }, [])

  const getAllComments = () => {
    axios.get('http://localhost:3000/api/comments/').then((res) => {
      console.log(res.data);
      setAllComments(res.data)
    })
  }

  const commentModalCloseHandler = () => {
    setShowCommentModal(false)
  }
  const RemoveCommentModalCloseHandler = () => {
    setShowRemoveCommentModal(false)
  }
  const RemoveCommentModalSubmitHandler = () => {
    setShowRemoveCommentModal(false)
  }
  const EditComponentModalCloseHandler = () => {
    setShowEditCommentModal(false)
  }
  const EditComponentModalSubmitHandler = () => {
    setShowEditCommentModal(false)
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
                    <button className='table-btn' onClick={() => {
                      setShowCommentModal(true)
                      setSelectComment(comment)
                    }}>مشاهده</button>
                  </td>
                  <td>
                    {comment.date}
                  </td>
                  <td>
                    {comment.hour}
                  </td>
                  <td>
                    <button className='table-btn' onClick={() => {setShowRemoveCommentModal(true) }}>حذف</button>
                    <button className='table-btn' onClick={() => {setShowEditCommentModal(true)}}>ویرایش</button>
                    <button className='table-btn' onClick={() => { }}>پاسخ</button>
                  </td>
                </tr>
              ))
            ) : (
              <ErrorBox msg='هیچ کامنتی وجود ندارد' />
            )
          }

        </tbody>
      </table>
      {/* Comment Modals */}
      {
        showCommentModal ? (
          <Modal CommentModalClose={commentModalCloseHandler}>
            <h1>{selectComment.body}</h1>
            <button onClick={commentModalCloseHandler} >بستن</button>
          </Modal>
        ) : null
      }
      {
        showRemoveCommentModal ? (
          <Modal  RemoveCommentModalClose={RemoveCommentModalCloseHandler}>
            <>
              <h1 className='modal-title'>ایا از حذف اطمینان داری؟</h1>
              <button onClick={RemoveCommentModalCloseHandler}>بله</button>
              <button onClick={RemoveCommentModalSubmitHandler}>خیر</button>
            </>
          </Modal>
        ) : null
      }
      {
         showEditCommentModal ? (
          <Modal EditCommentModalClose={EditComponentModalCloseHandler}>
            <h1>متن جدید را وارد کنید</h1>
            <div className='edit-comment'>
            <textarea>
            </textarea>
            <button onClick={EditComponentModalSubmitHandler}>تایید</button>
            </div>
          </Modal>
         ) : null
      }
      {

      }
    </div>
  )
}
