import React, { Fragment, useEffect, useState } from 'react'
import './OrdersPage.css'
import Header from '../../components/Header'
import { Link } from 'react-router'
import axios from 'axios'
import OrdersGrid from './OrdersGrid'

export const OrdersPage = ({ cart }) => {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        const fetchOrdersData = async () => {
            const res = await axios.get('api/orders?expand=products')
            setOrders(res.data)
        }

        fetchOrdersData()
    }, [])

    return (
        <>
            <title>Orders</title>
            <link rel="icon" href="orders-favicon.png" type="image/x-icon" />

            <Header cart={cart} />

            <div className="orders-page">
                <div className="page-title">Your Orders</div>

                <OrdersGrid orders={orders} />
            </div>
        </>
    )
}
