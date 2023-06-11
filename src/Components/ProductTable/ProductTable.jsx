import axios from 'axios';
import React, { useState } from 'react'
import ErrorBox from '../ErrorBox/ErrorBox';
import Modal from '../Modal/Modal';
import { MdProductionQuantityLimits } from 'react-icons/md'

export default function ProductTable({ getAllProduct, allProduct }) {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false)
    const [selectProductId, setSelectProductId] = useState(null)

    const [newProductTitle, setNewProductTitle] = useState('')
    const [newProductPrice, setNewProductPrice] = useState()
    const [newProductCount, setNewProductCount] = useState()
    const [newProductImg, setNewProductImg] = useState('')
    const [newProductPopularity, setNewProductPopularity] = useState()
    const [newProductSale, setNewProductSale] = useState()
    const [newProductColors, setNewProductColors] = useState()

    const editProductObj = {
        title: newProductTitle,
        price: newProductPrice,
        count: newProductCount,
        img: newProductImg,
        popularity: newProductPopularity,
        sale: newProductSale,
        colors: newProductColors
    }


    const DeleteModalSubmitAction = () => {
        axios.delete(`http://localhost:3000/api/products/${selectProductId}`)
            .then(res => {
                console.log(res)
                setShowDeleteModal(false)
                getAllProduct()
            }

            )
    };
    const DeleteModalCancelAction = () => {
        setShowDeleteModal(false);
    };
    const EditModalSubmitAction = () => {
        axios.put(`http://localhost:3000/api/products/${selectProductId}`, editProductObj).then((res) => {
            console.log(res)
            getAllProduct()
        })
        setShowEditModal(false)
    };
    const EditModalCloseAction = () => {
        setShowEditModal(false)
    };

    return (
        <>
            {
                allProduct.length ? (
                    <div className='product-table table-section'>
                        <h1 className='table-title'>
                            <MdProductionQuantityLimits />
                            محصولات
                        </h1>
                        <table>
                            <thead>
                                <tr>
                                    <th>عکس </th>
                                    <th>نام </th>
                                    <th>قیمت </th>
                                    <th>موجودی</th>
                                    <th>عملیات</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allProduct.map((product) => (
                                        <tr className='table-item'>
                                            <td>
                                                <img src={require('../../Assets/images/product/product1.jpeg')} alt="img" />
                                            </td>
                                            <td>{product.title}</td>
                                            <td>{product.price}</td>
                                            <td>{product.count}</td>
                                            <td>
                                                <button className='table-btn' onClick={() => {
                                                    setShowDeleteModal(true)
                                                    setSelectProductId(product.id)
                                                }}
                                                >حذف</button>
                                                <button className='table-btn' onClick={() => {
                                                    setShowEditModal(true)
                                                    setSelectProductId(product.id)
                                                    setNewProductCount(product.count)
                                                    setNewProductPrice(product.price)
                                                    setNewProductTitle(product.title)
                                                    setNewProductImg(product.img)
                                                    setNewProductPopularity(product.popularity)
                                                    setNewProductSale(product.sale)
                                                    setNewProductColors(product.color)
                                                }}>ویرایش</button>
                                            </td>
                                        </tr>
                                    ))
                                }

                            </tbody>

                        </table>

                    </div>
                ) : (
                    <ErrorBox msg='هیچ محصولی یافت نشد' />
                )
            }
            {
                showDeleteModal && <Modal DeleteModaClose={DeleteModalCancelAction}>
                    <>
                        <h1 className='modal-title'>ایا از حذف اطمینان داری؟</h1>
                        <button onClick={() => DeleteModalSubmitAction()} >بله</button>
                        <button onClick={() => DeleteModalCancelAction()}>خیر</button>
                    </>
                </Modal>
            }
            {
                showEditModal && <Modal EditModalClose={EditModalCloseAction}>
                    <h1>اطلاعات جدید را وارد نمایید</h1>
                    <div className='edit-modal-inputs'>
                        <input type="text" placeholder='عنوان جدید را وارد کنید' value={newProductTitle} onChange={(e) => setNewProductTitle(e.target.value)} />
                        <input type="text" placeholder='قیمت جدید را وارد کنید' value={newProductPrice} onClick={(e) => setNewProductPrice(e.target.value)} />
                        <input type="text" placeholder='موجودی محصول را وارد کنید' value={newProductCount} onChange={(e) => setNewProductCount(e.target.value)} />
                        <input type="text" placeholder='عکس محصول را وارد کنید' value={newProductImg} onChange={(e) => setNewProductImg(e.target.value)} />
                        <input type="text" placeholder='محبوبیت محصول را وارد کنید' value={newProductPopularity} onChange={(e) => setNewProductPopularity(e.target.value)} />
                        <input type="text" placeholder='میزان فروش محصول را وارد کنید' value={newProductSale} onChange={(e) => setNewProductSale(e.target.value)} />
                        <input type="text" placeholder='تعداد رنگ محصول را وارد کنید' value={newProductColors} onChange={(e) => setNewProductColors(e.target.value)} />
                    </div>
                    <button onClick={EditModalSubmitAction}>ثبت اطلاعات جدید</button>
                </Modal>
            }
        </>
    )
}
