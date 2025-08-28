import React, { Fragment } from 'react'
import dayjs from 'dayjs'
import buyAgainLogo from '../../assets/images/icons/buy-again.png'
import { Link } from 'react-router'

const OrderDetailsGrid = ({ order }) => {
    return (
        <div className="order-details-grid">
            {order.products.map((orderProduct, index) => {
                let productId = order.products[index].productId;

                return (
                    <Fragment key={orderProduct.id}>
                        <div className="product-image-container">
                            <img src={orderProduct.product.image} />
                        </div>

                        <div className="product-details">
                            <div className="product-name">
                                {orderProduct.product.name}
                            </div>
                            <div className="product-delivery-date">
                                Arriving on: {dayjs(orderProduct.estimatedDeliveryTimeMs).format('MMMM D')}
                            </div>
                            <div className="product-quantity">
                                Quantity: {orderProduct.quantity}
                            </div>
                            <button className="buy-again-button button-primary">
                                <img className="buy-again-icon" src={buyAgainLogo} />
                                <span className="buy-again-message">Add to Cart</span>
                            </button>
                        </div>

                        <div className="product-actions">
                            <Link to={`/tracking/${order.id}/${productId}`}>
                                <button className="track-package-button button-secondary">
                                    Track package
                                </button>
                            </Link>
                        </div>
                    </Fragment>
                )
            })}
        </div>
    )
}

export default OrderDetailsGrid