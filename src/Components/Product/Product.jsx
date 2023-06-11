import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import AddNewProduct from '../AddNewProduct/AddNewProduct'
import ProductTable from '../ProductTable/ProductTable'

export default function Product() {
  const [allProduct, setallProduct] = useState([])

  useEffect(() => {
    getAllProduct()
  }, [])

  const getAllProduct = () => {
    axios.get('http://localhost:3000/api/products/')
      .then((res) => setallProduct(res.data))
      .catch((error) => console.log(error.message));
  }

  return (
    <>
      <AddNewProduct getAllProduct={getAllProduct} />
      <ProductTable getAllProduct={getAllProduct} allProduct={allProduct} />
    </>




  )
}
