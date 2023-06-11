import React from 'react'
import { AiOutlineComment } from 'react-icons/ai'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

import ErrorBox from '../ErrorBox/ErrorBox'
import Modal from '../Modal/Modal'
export default function Comments() {
  const [showCommentModal, setShowCommentModal] = useState(false)
  const [showRemoveCommentModal, setShowRemoveCommentModal] = useState(false)
  const [showEditCommentModal, setShowEditCommentModal] = useState(false)
  const [showReplayCommentModal, setReplayCommentModal] = useState(false)
  const [allComments, setAllComments] = useState([])
  const [selectComment, setSelectComment] = useState()
  const [editCommentValue, setEditCommentValue] = useState('')
  const [replayCommentValue , setReplayCommentValue] = useState('')
  const [isshowErrorAlertBox, setIsShoweErrorAlertBox] = useState(false)
  useEffect(() => {
    getAllComments()
  }, [])

  const getAllComments = () => {
    axios.get('http://localhost:3000/api/comments/').then((res) => {
      setAllComments(res.data)
    })
  }

  const commentModalCloseHandler = () => {
    setShowCommentModal(false)
  }
  const RemoveCommentModalCloseHandler = () => {
    setShowRemoveCommentModal(false)
  }
  const RemoveCommentModalSubmitHandler = () => { // Delete Comment from DataBase
    axios.delete(`http://localhost:3000/api/comments/${selectComment.id}`).then((res) => {
      console.log(res)
      setShowRemoveCommentModal(false)
    }).catch((err) => console.log(err))
  }
  const EditComponentModalCloseHandler = () => {
    setShowEditCommentModal(false)
  }
  const EditComponentModalSubmitHandler = () => { // Edit Comment Text from DataBase
    if (editCommentValue.length) {
      axios.put(`http://localhost:3000/api/comments/${selectComment.id}`, {
        body: editCommentValue
      }).then(() => {
        setShowEditCommentModal(false);
        getAllComments()
      }).catch((err) => {
        console.log(err);
      })
    } else {
      setIsShoweErrorAlertBox(true)
      setTimeout(()=>{
        setIsShoweErrorAlertBox(false)
      },2000)
    }

  }
  const ReplayCommentModalCloseHandler = () => {
    setReplayCommentModal(false)
  }
  const ReplayCommentModalSubmitHandler = () => {
    if(replayCommentValue.length){
      setReplayCommentModal(false)
    }else{
      setIsShoweErrorAlertBox(true)
      setTimeout(()=>{
        setIsShoweErrorAlertBox(false)
      },2000)
    }
    
  }
  return (
    <div className='comments-section table-section'>
      <h1 className='table-title'>
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
                <tr className='table-item'>
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
                    <button className='table-btn' onClick={() => {
                      setShowRemoveCommentModal(true)
                      setSelectComment(comment)
                    }}>حذف</button>
                    <button className='table-btn' onClick={() => {
                      setShowEditCommentModal(true)
                      setSelectComment(comment)
                    }}>ویرایش</button>
                    <button className='table-btn' onClick={() => { setReplayCommentModal(true) 
                      setSelectComment(comment)}}>پاسخ</button>
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
          <Modal RemoveCommentModalClose={RemoveCommentModalCloseHandler}>
            <>
              <h1 className='modal-title'>ایا از حذف اطمینان داری؟</h1>
              <button onClick={RemoveCommentModalSubmitHandler}>بله</button>
              <button onClick={RemoveCommentModalCloseHandler}>خیر</button>
            </>
          </Modal>
        ) : null
      }
      {
        showEditCommentModal ? (
          <>
            <Modal EditCommentModalClose={EditComponentModalCloseHandler} isshowErrorAlertBox={isshowErrorAlertBox}>
              <h1>متن جدید را وارد کنید</h1>
              <div className='edit-comment'>
                <textarea value={editCommentValue} onChange={(e) => setEditCommentValue(e.target.value)}>
                </textarea>
                <button onClick={EditComponentModalSubmitHandler}>تایید</button>
              </div>
            </Modal>
          </>

        ) : null
      }
      {
        showReplayCommentModal ? (
          <Modal ReplayCommentModalClose={ReplayCommentModalCloseHandler} isshowErrorAlertBox={isshowErrorAlertBox}>
            <h1>پاسخ را ارسال کنید</h1>
            <div className='edit-comment'>
              <textarea value={replayCommentValue} onChange={(e)=> setReplayCommentValue(e.target.value)}>
              </textarea>
              <button onClick={ReplayCommentModalSubmitHandler}>ارسال</button>
            </div>
          </Modal>
        ) : null
      }
    </div>
  )
}
