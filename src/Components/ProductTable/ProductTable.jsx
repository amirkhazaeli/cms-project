import React, { useState } from 'react'
import Modal from '../Modal/Modal';
import './ProductTable.css'

export default function ProductTable() {

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showDetailsModal, setShoeDetailsModal] = useState(false)
    const DeleteModalSubmitAction = () => {
        setShowDeleteModal(false);
    };

    const DeleteModalCancelAction = () => {
        setShowDeleteModal(false);
    };
    const DetailsModalHandler = () => {
        setShoeDetailsModal(false)
    }
    return (
        <>
            <div className='product-table'>
                <table>
                    <thead>
                        <tr>
                            <th>عکس محصول</th>
                            <th>نام محصول</th>
                            <th>قیمت محصول</th>
                            <th>موجودی</th>
                            <th>عملیات</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='product-item'>
                            <td>
                                <img src={require('../../Assets/images/product/product1.jpeg')} alt="" />
                            </td>
                            <td>ساعت هوشمند</td>
                            <td>26,000 تومان</td>
                            <td>20</td>
                            <td>
                                <button className='table-product-btn' onClick={() => setShoeDetailsModal(true)}>جزییات</button>
                                <button className='table-product-btn' onClick={() => setShowDeleteModal(true)}>حذف</button>
                                <button className='table-product-btn'>ویرایش</button>
                            </td>
                        </tr>
                    </tbody>

                </table>

            </div>
            {
                showDeleteModal && <Modal>
                    <>
                        <h1 className='modal-title'>ایا از حذف اطمینان داری؟</h1>
                        <button onClick={() => DeleteModalSubmitAction()} >بله</button>
                        <button onClick={() => DeleteModalCancelAction()}>خیر</button>
                    </>
                </Modal>
            }
            {
                showDetailsModal && <Modal unHide={DetailsModalHandler} >
                    <>
                        <table>
                            <thead className='modal-head'>
                                <th>قیمت</th>
                                <th>میزان فروش</th>
                                <th>موجودی</th>
                            </thead>
                            <tbody>
                                <td>26,000</td>
                                <td>بالا</td>
                                <td>20</td>
                            </tbody>
                        </table>
                    </>
                </Modal>
            }
        </>
    )
}
