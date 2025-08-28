import axios from 'axios'
import { useEffect, useState } from 'react'
import React from 'react'
import './HomePage.css'
import Header from '../../components/Header'
import ProductsGrid from './ProductsGrid'

const HomePage = ({ cart }) => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        axios.get('/api/products')
            .then((res) => {
                setProducts(res.data)
            })
    }, [])

    return (
        <>
            <title>Ecommerce Project</title>
            <link rel="icon" href="images/home-favicon.png" type="image/x-icon" />

            <Header cart={cart} />

            <div className="home-page">
                {<ProductsGrid products={products} />}
            </div>
        </>
    )
}

export default HomePage