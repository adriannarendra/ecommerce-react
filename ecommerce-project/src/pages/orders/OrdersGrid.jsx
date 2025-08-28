import React from 'react'
import OrderHeader from './OrderHeader'
import OrderDetailsGrid from './OrderDetailsGrid'
import { Link } from 'react-router'

const OrdersGrid = ({ orders }) => {
    return (
        <div className="orders-grid">
                {orders.map((order) => {
                    return (
                        <div key={order.id} className="order-container">

                            <OrderHeader order={order} />

                            <OrderDetailsGrid order={order} />
                        </div>
                    )
                })}
        </div>
    )
}

export default OrdersGrid