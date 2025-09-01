import axios from 'axios'
import { useEffect, useState } from 'react'
import React from 'react'
import './HomePage.css'
import Header from '../../components/Header'
import ProductsGrid from './ProductsGrid'
import { useNavigate, useSearchParams } from 'react-router'

const HomePage = ({ cart, loadCart }) => {
    const [products, setProducts] = useState([]);
    const [searchParams] = useSearchParams();
    const searchValue = searchParams.get('search');
    const navigate = useNavigate()

    // useeffect cannot return a promise hence the inner function
    useEffect(() => {
        const getHomedata = async () => {
            const urlPath = searchValue === '' ? '/api/products' : `/api/products?search=${searchValue}` 
            const res = await axios.get(urlPath)
            if (res.data.length === 0) {navigate('/*')}
            setProducts(res.data)
        }

        getHomedata()
    }, [searchValue])

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