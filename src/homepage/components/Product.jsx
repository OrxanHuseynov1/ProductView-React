import React, { useEffect, useState } from 'react'
import ProductCart from './ProductCart'
import SearchBar from './SearchBar'

const Product = () => {

    const [products,setProducts] = useState([])
    const [searchTerm,setSearchTerm] = useState('')
    const [pageSize,setPageSize] = useState(10)

    const getProductData = async () =>
    {
        try
        {
            const baseUrl = 'http://localhost:3000/api/products?pageSize=${pageSize}'
            const url = searchTerm ? baseUrl + `&searchTerm=${searchTerm}` : baseUrl
            const response = await fetch(url)
            const data = await response.json()

            setProducts(data.products)
        }
        catch(error) {console.error(error)}
    }

    useEffect(() => {getProductData()},[searchTerm,pageSize])

  return (
    <>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>

        <div className='grid grid-cols-3 gap-10 p-10'>

            {products?.map(product => <ProductCart product={product} />)}
            <button className='text-white bg-red-500 px-5 py-3 w-fit col-span-3 justify-self-center'
                onClick={() => setPageSize(prevState => prevState + 5)}
            >View More</button>

        </div>
    
    </>
  )
}

export default Product