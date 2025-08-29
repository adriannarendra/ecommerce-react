import React, { useState } from 'react'
import { formatMoney } from '../../utils/money'
import axios from 'axios'

const CartItemDetails = ({ cartItem, loadCart }) => {
    const [isUpdate, setIsUpdate] = useState(false)
    const [quantity, setQuantity] = useState(cartItem.quantity)

    const deleteCartItem = async () => {
        await axios.delete(`/api/cart-items/${cartItem.productId}`)

        await loadCart()
    }

    const setItemQuantity = async (e) => {
        setQuantity(Number(e.target.value))
    }

    const setIsUpdateFunc = () => {
        setIsUpdate(true)
    }

    const updateItemQuantity = async () => {
        await axios.put(`/api/cart-items/${cartItem.productId}`, {
            quantity: quantity
        })
        await loadCart()
        setIsUpdate(false)
    }

    return (
        <>
            <img className="product-image"
                src={cartItem.product.image} />

            <div className="cart-item-details">
                <div className="product-name">
                    {cartItem.product.name}
                </div>
                <div className="product-price">
                    {formatMoney(cartItem.product.priceCents)}
                </div>
                <div className="product-quantity">
                    <span>
                        Quantity: {
                            isUpdate
                                ?
                                <input
                                    value={quantity}
                                    onChange={setItemQuantity}
                                    type="number"
                                    style={{ width: '50px' }}
                                />
                                :
                                <span className="quantity-label">{quantity}</span>
                        }
                    </span>
                    <span
                        className="update-quantity-link link-primary"
                        onClick={
                            isUpdate === false
                                ?
                                setIsUpdateFunc
                                :
                                updateItemQuantity
                        }
                    >
                        Update
                    </span>
                    <span className="delete-quantity-link link-primary" onClick={deleteCartItem}>
                        Delete
                    </span>
                </div>
            </div>
        </>
    )
}

export default CartItemDetails