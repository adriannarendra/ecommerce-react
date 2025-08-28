import React from 'react'
import dayjs from 'dayjs'
import { formatMoney } from '../../utils/money'
import axios from 'axios'

const DeliveryOptions = ({ cartItem, deliveryOptions, loadCart }) => {
    return (
        <div className="delivery-options">
            <div className="delivery-options-title">
                Choose a delivery option:
            </div>
            {deliveryOptions.map((deliveryOption) => {
                const updateDeliveryOption = async () => {
                    // backend convention, when you want to update something, the id is in url
                    await axios.put(`/api/cart-items/${cartItem.productId}`, {
                        deliveryOptionId: deliveryOption.id
                    }),
                    await loadCart();
                }

                return (
                    <div key={deliveryOption.id} onClick={updateDeliveryOption} className="delivery-option">
                        <input type="radio"
                            checked={deliveryOption.id === cartItem.deliveryOptionId}
                            onChange={() => {}}
                            className="delivery-option-input"
                            name={`delivery-option-${cartItem.productId}`} />
                        <div>
                            <div className="delivery-option-date">
                                {dayjs(deliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
                            </div>
                            <div className="delivery-option-price">
                                {deliveryOption.priceCents === 0 ? 'FREE Shipping' : `${formatMoney(deliveryOption.priceCents)} - Shipping`}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default DeliveryOptions