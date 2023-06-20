import React from 'react'
import './AddNewProduct.css'
import { IoPricetagOutline } from 'react-icons/io5'
import { AiOutlineLineChart } from 'react-icons/ai'
import { MdOutlineDriveFileRenameOutline, MdOutlineInventory } from 'react-icons/md'
import { BsBarChartLine } from 'react-icons/bs'
import { HiOutlineColorSwatch } from 'react-icons/hi'
import { FaRoute } from 'react-icons/fa'
import { useState } from 'react'
import axios from 'axios'
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
export default function AddNewProduct({ getAllProduct }) {

    const [newProductTitle, setNewProductTitle] = useState('')
    const [newProductPrice, setNewProductPrice] = useState()
    const [newProductCount, setNewProductCount] = useState()
    const [newProductImg, setNewProductImg] = useState('')
    const [newProductPopularity, setNewProductPopularity] = useState()
    const [newProductSale, setNewProductSale] = useState()
    const [newProductColors, setNewProductColors] = useState()
    const [showErrorAlert, setShowErrorAlert] = useState(false)
    
    const regex = /^\S+$/;

    const newProductObj = {
        title: newProductTitle,
        price: newProductPrice,
        count: newProductCount,
        img: newProductImg,
        popularity: newProductPopularity,
        sale: newProductSale,
        colors: newProductColors
    }

    const addNewProductHandler = (event) => {
        event.preventDefault()
        if (regex.test(newProductTitle) && regex.test(newProductPrice) && regex.test(newProductCount) && regex.test(newProductCount) && regex.test(newProductImg) && regex.test(newProductPopularity) && regex.test(newProductSale) && regex.test(newProductColors)) {

            axios.post('http://localhost:3000/api/products', newProductObj).then((res) => {
                console.log(res.data)
                getAllProduct()
                emptyInputes()
            })
        } else {
            setShowErrorAlert(true)
            setTimeout(() => {
                setShowErrorAlert(false)
            }, 3000);
        }

    }

    function emptyInputes() {
        setNewProductTitle('')
        setNewProductPrice('')
        setNewProductCount('')
        setNewProductImg('')
        setNewProductPopularity('')
        setNewProductSale('')
        setNewProductColors('')
    }
    return (
        <div className='add-Product'>
            <h1 className='add-new-product-title'>افزودن محصول جدید</h1>
            <form>
                <div className='add-new-product-wrap'>
                    <div className="add-new-product-group">
                        <MdOutlineDriveFileRenameOutline />
                        <input type="text" placeholder='اسم محصول را بنویسید' value={newProductTitle} onChange={(event) => setNewProductTitle(event.target.value)} />
                    </div>
                    <div className="add-new-product-group">
                        <MdOutlineInventory />
                        <input type="number" placeholder='موجودی محصول را بنویسید' value={newProductCount} onChange={(event) => setNewProductCount(event.target.value)} />
                    </div>
                    <div className="add-new-product-group">
                        <AiOutlineLineChart />
                        <input type="number" placeholder='میزان محبوبیت محصول را بنویسید' value={newProductPopularity} onChange={(event) => setNewProductPopularity(event.target.value)} />
                    </div>
                    <div className="add-new-product-group">
                        <HiOutlineColorSwatch />
                        <input type="number" placeholder='تعداد رنگ بندی محصول را بنویسید' value={newProductColors} onChange={(event) => setNewProductColors(event.target.value)} />
                    </div>
                    <div className="add-new-product-group">
                        <IoPricetagOutline />
                        <input type="number" placeholder='قیمت محصول را بنویسید' value={newProductPrice} onChange={(event) => setNewProductPrice(event.target.value)} />
                    </div>
                    <div className="add-new-product-group">
                        <FaRoute />
                        <input type="text" placeholder='آدرس محصول محصول را بنویسید' value={newProductImg} onChange={(event) => setNewProductImg(event.target.value)} />
                    </div>
                    <div className="add-new-product-group">
                        <BsBarChartLine />
                        <input type="number" placeholder='میزان فروش محصول را بنویسید' value={newProductSale} onChange={(event) => setNewProductSale(event.target.value)} />
                    </div>
                </div>
                <button className='add-new-product-btn' onClick={(event) => addNewProductHandler(event)}>ثبت محصول</button>
            </form>
            {
                showErrorAlert ? (
                    <Stack sx={{ width: '100%' }} spacing={2}>
                        <Alert severity="error">
                            <AlertTitle>خطا</AlertTitle>
                            لطفا تمام مقادیر را وارد کنید
                        </Alert>
                    </Stack>
                ) : null
            }
        </div>


    )
}
