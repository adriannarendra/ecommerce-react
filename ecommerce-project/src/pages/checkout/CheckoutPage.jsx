import React, { useEffect, useState } from 'react'
import './CheckoutPage.css'
import CheckoutHeader from './CheckoutHeader'
import axios from 'axios'
import OrderSummary from './OrderSummary'
import PaymentSummary from './PaymentSummary'

const CheckoutPage = ({ cart, loadCart }) => {
    const [deliveryOptions, setDeliveryOptions] = useState([]);
    const [paymentSummary, setPaymentSummary] = useState(null);

    useEffect(() => {
        const fetchCheckoutData = async () => {
            const res = await axios.get('/api/delivery-options?expand=estimatedDeliveryTime')
            setDeliveryOptions(res.data)
        }

        fetchCheckoutData()
    }, [])

    useEffect(() => {
        const fetchCheckoutData = async () => {
            const res = await axios.get('/api/payment-summary')
            setPaymentSummary(res.data)
        }

        fetchCheckoutData()
    }, [cart])

    return (
        <>
            <title>Checkout</title>
            <link rel="icon" href="cart-favicon.png" type="image/x-icon" />

            <CheckoutHeader cart={cart} />

            <div className="checkout-page">
                <div className="page-title">Review your order</div>

                <div className="checkout-grid">
                    <OrderSummary cart={cart} deliveryOptions={deliveryOptions} loadCart={loadCart} />

                    <PaymentSummary paymentSummary={paymentSummary} />
                </div>
            </div>
        </>
    )
}

export default CheckoutPage