import React from 'react'
import './AddNewProduct.css'
import {IoPricetagOutline} from 'react-icons/io5'
import {AiOutlineLineChart} from 'react-icons/ai'
import {MdOutlineDriveFileRenameOutline,MdOutlineInventory} from 'react-icons/md'
import {BsBarChartLine} from 'react-icons/bs'
import {HiOutlineColorSwatch} from 'react-icons/hi'
import {FaRoute} from 'react-icons/fa'
export default function AddNewProduct() {
    return (
        <div className='add-Product'>
            <h1 className='add-new-product-title'>افزودن محصول جدید</h1>
            <form>
                <div className='add-new-product-wrap'>
                    <div className="add-new-product-group">
                        <MdOutlineDriveFileRenameOutline />
                        <input type="text" placeholder='اسم محصول را بنویسید'/>
                    </div>
                    <div className="add-new-product-group">
                        <MdOutlineInventory />
                        <input type="text" placeholder='موجودی محصول را بنویسید'/>
                    </div>
                    <div className="add-new-product-group">
                        <AiOutlineLineChart />
                        <input type="text" placeholder='میزان محبوبیت محصول را بنویسید'/>
                    </div>
                    <div className="add-new-product-group">
                        <HiOutlineColorSwatch />
                        <input type="text" placeholder='تعداد رنگ بندی محصول را بنویسید'/>
                    </div>
                    <div className="add-new-product-group">
                        <IoPricetagOutline />
                        <input type="text" placeholder='قیمت محصول را بنویسید'/>
                    </div>
                    <div className="add-new-product-group">
                        <FaRoute />
                        <input type="text" placeholder='آدرس محصول محصول را بنویسید'/>
                    </div>
                    <div className="add-new-product-group">
                        <BsBarChartLine />
                        <input type="text" placeholder='میزان فروش محصول را بنویسید'/>
                    </div>
                </div>
                <button className='add-new-product-btn'>ثبت محصول</button>
            </form>

        </div>


    )
}
