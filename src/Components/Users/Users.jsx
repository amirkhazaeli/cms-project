import React from 'react'
import { FiUsers } from 'react-icons/fi'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import ErrorBox from '../ErrorBox/ErrorBox'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import pagination from '../../Assets/Utils/Pagination';
import Modal from '../Modal/Modal'
export default function Users() {
  const [allUsers, setAllUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1)
  const [showData, setShowData] = useState([])
  const [selectUser, setSelectUser] = useState()
  const pagesCount = Math.ceil(allUsers.length / 6)

  // modal flag
  const [showRemoveUserModal, setShowRemoveUserModal] = useState(false)
  const [showEditUserModal, setShowEditUserModal] = useState(false)


  useEffect(() => {
    getAllUser()
  }, [])

  useEffect(() => {
    setShowData(pagination(allUsers, currentPage))
  }, [allUsers, currentPage])

  const getAllUser = () => {
    axios.get('http://localhost:3000/api/users/').then((res) => {
      console.log(res.data)
      setAllUsers(res.data)
    })
  }

  const handlePageChange = (event, value) => {
    setCurrentPage(value)
  }

  const RemoveUserModalCloseHandler = () => {
    setShowRemoveUserModal(false)
  }
  const RemoveUserModalSubmitHandler = () => {
    axios.delete(`http://localhost:3000/api/users/${selectUser.id}`).then((res) => {console.log(res)
    getAllUser()})
    setShowRemoveUserModal(false)
  }

  const EditUserModalCloseHandler = () => {
    setShowEditUserModal(false)
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
              showData[0].map((user) => (
                <tr className='table-item'>
                  <td>{user.firsname} {user.lastname}</td>
                  <td>{user.username}</td>
                  <td>{user.password}</td>
                  <td>{user.phone}</td>
                  <td>{user.email}</td>
                  <td>
                    <button className='table-btn' onClick={() => {
                      setShowRemoveUserModal(true)
                      setSelectUser(user)
                    }}>حذف</button>
                    <button className='table-btn' onClick={() => {
                      setShowEditUserModal(true)
                      setSelectUser(user)
                    }}>ویرایش</button>
                  </td>
                </tr>
              ))
            ) : (
              <ErrorBox msg='کاربری یافت نشد' />
            )
          }

        </tbody>
      </table>
      {
        allUsers.length > 5 ? (
          <div className='pagination'>
            <Stack spacing={2}>
              <Pagination count={pagesCount} onChange={handlePageChange} color="primary" />
            </Stack>
          </div>
        ) : null
      }
      {
        showRemoveUserModal ? (
          <Modal modalClose={RemoveUserModalCloseHandler}>
            <>
              <h1 className='modal-title'>ایا از حذف اطمینان داری؟</h1>
              <button onClick={RemoveUserModalSubmitHandler}>بله</button>
              <button onClick={RemoveUserModalCloseHandler}>خیر</button>
            </>
          </Modal>
        ) : null
      }
      {
        showEditUserModal ? (
          <Modal modalClose={EditUserModalCloseHandler}>
            <>
              <h1>شما مجاز به تغییر اطلاعات کاربر نیستید</h1>
              <button onClick={EditUserModalCloseHandler}>باشه</button>
            </>

          </Modal>
        ) : null
      }
    </div>
  )
}
