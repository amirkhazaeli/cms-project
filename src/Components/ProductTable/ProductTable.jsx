import React from 'react'
import './ProductTable.css'
export default function ProductTable() {
    return (
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
                            <button className='table-product-btn'>جزییات</button>
                            <button className='table-product-btn'>حذف</button>
                            <button className='table-product-btn'>ویرایش</button>
                        </td>
                    </tr>
                </tbody>

            </table>
        </div>

    )
}
