import React, { useEffect, useState } from 'react'
import './CheckoutPage.css'
import CheckoutHeader from './CheckoutHeader'
import axios from 'axios'
import OrderSummary from './OrderSummary'
import PaymentSummary from './PaymentSummary'

const CheckoutPage = ({ cart }) => {
    const [deliveryOptions, setDeliveryOptions] = useState([]);
    const [paymentSummary, setPaymentSummary] = useState(null);

    useEffect(() => {
        axios.get('/api/delivery-options?expand=estimatedDeliveryTime')
            .then((res) => {
                setDeliveryOptions(res.data)
            })

        axios.get('/api/payment-summary')
            .then((res) => {
                setPaymentSummary(res.data)
            })
    }, [])

    return (
        <>
            <title>Checkout</title>
            <link rel="icon" href="images/cart-favicon.png" type="image/x-icon" />

            <CheckoutHeader />

            <div className="checkout-page">
                <div className="page-title">Review your order</div>

                <div className="checkout-grid">
                    <OrderSummary cart={cart} deliveryOptions={deliveryOptions} />

                    <PaymentSummary paymentSummary={paymentSummary} />
                </div>
            </div>
        </>
    )
}

export default CheckoutPage