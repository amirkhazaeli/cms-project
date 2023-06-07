import React from 'react'
import AddNewProduct from '../AddNewProduct/AddNewProduct'
import DeleteModal from '../DeleteModal/DeleteModal'
import ErrorBox from '../ErrorBox/ErrorBox'
import ProductTable from '../ProductTable/ProductTable'

export default function Product() {
  return (
    <>
         <AddNewProduct />
         <ProductTable />
    </>
   
    
  )
}
