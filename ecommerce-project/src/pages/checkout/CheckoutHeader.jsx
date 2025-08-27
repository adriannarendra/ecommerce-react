import React from 'react'
import './CheckoutHeader.css'
import { Link } from 'react-router'
import logo from '../../assets/images/logo.png'
import mobileLogoWhite from '../../assets/images/mobile-logo-white.png'
import checkoutLockIcon from '../../assets/images/icons/checkout-lock-icon.png'

const CheckoutHeader = () => {
    return (
        <div className="checkout-header">
            <div className="header-content">
                <div className="checkout-header-left-section">
                    <Link to="/">
                        <img className="logo" src={logo} />
                        <img className="mobile-logo" src={mobileLogoWhite} />
                    </Link>
                </div>

                <div className="checkout-header-middle-section">
                    Checkout (<Link className="return-to-home-link"
                        to="/">3 items</Link>)
                </div>

                <div className="checkout-header-right-section">
                    <img src={checkoutLockIcon} />
                </div>
            </div>
        </div>
    )
}

export default CheckoutHeader