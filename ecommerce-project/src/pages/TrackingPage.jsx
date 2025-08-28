import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import './TrackingPage.css'
import { useParams } from 'react-router'
import axios from 'axios'
import dayjs from 'dayjs'

const TrackingPage = ({ cart }) => {
    const { orderId, productId } = useParams()
    const [order, setOrder] = useState(null)

    useEffect(() => {
        const fetchOrderById = async () => {
            const res = await axios.get(`/api/orders/${orderId}?expand=products`)
            setOrder(res.data)
        }

        fetchOrderById()
    }, [orderId])

    if (!order) return null

    const product = order.products.find((product) => {
        return product.productId === productId
    })

    const deliveryTimeMs = product.estimatedDeliveryTimeMs - order.orderTimeMs;
    const timePassedMs = dayjs().valueOf() - order.orderTimeMs;
    let deliveryPercentage = timePassedMs / deliveryTimeMs * 100;
    if (deliveryPercentage > 100) deliveryPercentage = 100;
    const status = {
        isPreparing: deliveryPercentage < 33 ? deliveryPercentage : null,
        isShipped: deliveryPercentage >= 33 && deliveryPercentage < 100 ? deliveryPercentage : null,
        isDelivered: deliveryPercentage === 100 ? deliveryPercentage : null,
    }

    console.log(deliveryPercentage)

    return (
        <>
            <title>Tracking</title>
            <link rel="icon" href="tracking-favicon.png" type="image/x-icon" />

            <Header cart={cart} />

            <div className="tracking-page">
                <div className="order-tracking">
                    <a className="back-to-orders-link link-primary" href="/orders">
                        View all orders
                    </a>

                    <div className="delivery-date">
                        {deliveryPercentage >= 100 ? 'Delivered on' : 'Arriving on'} {dayjs(product.estimatedDeliveryTimeMs).format('dddd, MMMM DD')}
                    </div>

                    <div className="product-info">
                        {product.product.name}
                    </div>

                    <div className="product-info">
                        Quantity: {product.quantity}
                    </div>

                    <img className="product-image" src={product.product.image} />

                    <div className="progress-labels-container">
                        <div className={`progress-label ${status.isPreparing && 'current-status'}`}>
                            Preparing
                        </div>
                        <div className={`progress-label ${status.isShipped && 'current-status'}`}>
                            Shipped
                        </div>
                        <div className={`progress-label ${status.isDelivered && 'current-status'}`}>
                            Delivered
                        </div>
                    </div>

                    <div className="progress-bar-container">
                        <div style={{ width: `${deliveryPercentage}%` }} className="progress-bar"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TrackingPage