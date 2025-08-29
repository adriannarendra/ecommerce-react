import axios from 'axios'
import React from 'react'
import buyAgainLogo from '../../assets/images/icons/buy-again.png'

const OrderDetailsGridButton = ({ productId }) => {
    const addToCart = async () => {
        await axios.post('/api/cart-items', {
            productId: productId,
            quantity: 1
        })
    }

    return (
        <button className="buy-again-button button-primary" onClick={addToCart}>
            <img className="buy-again-icon" src={buyAgainLogo} />
            <span className="buy-again-message">Add to Cart</span>
        </button>
    )
}

export default OrderDetailsGridButton