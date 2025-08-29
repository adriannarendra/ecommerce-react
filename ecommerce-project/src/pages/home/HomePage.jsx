import axios from 'axios'
import { useEffect, useState } from 'react'
import React from 'react'
import './HomePage.css'
import Header from '../../components/Header'
import ProductsGrid from './ProductsGrid'

const HomePage = ({ cart, loadCart }) => {
    const [products, setProducts] = useState([]);

    // useeffect cannot return a promise hence the inner function
    useEffect(() => {
        const getHomedata = async () => {
            const res = await axios.get('/api/products')
            setProducts(res.data)
        }

        getHomedata()
    }, [])

    return (
        <>
            <title>Ecommerce Project</title>
            <link rel="icon" href="home-favicon.png" type="image/x-icon" />

            <Header cart={cart} />

            <div className="home-page">
                {<ProductsGrid products={products} loadCart={loadCart} />}
            </div>
        </>
    )
}

export default HomePage