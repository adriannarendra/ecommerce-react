import React, { useState } from 'react'
import './Header.css'
import { NavLink, useNavigate } from 'react-router'
import logoWhite from '../assets/images/logo-white.png'
import mobileLogoWhite from '../assets/images/mobile-logo-white.png'
import cartIcon from '../assets/images/icons/cart-icon.png'
import searchIcon from '../assets/images/icons/search-icon.png'

const Header = ({ cart }) => {
    const navigate = useNavigate();
    const [search, setSearch] = useState('');
    let totalQuantity = 0;

    cart && cart.forEach(cartItem => {
        totalQuantity += cartItem.quantity
    });

    const updateSearch = (e) => { setSearch(e.target.value) }

    return (
        <div className="header">
            <div className="left-section">
                <NavLink to="/" className="header-link">
                    <img className="logo" src={logoWhite} />
                    <img className="mobile-logo" src={mobileLogoWhite} />
                </NavLink>
            </div>

            <div className="middle-section">
                <input
                    className="search-bar"
                    type="text"
                    placeholder="Search"
                    value={search}
                    onChange={updateSearch}
                />

                <button
                    className="search-button"
                    // onClick={navigate(`/?search=${search}`)}
                >
                    <img className="search-icon" src={searchIcon} />
                </button>
            </div>

            <div className="right-section">
                <NavLink className="orders-link header-link" to="/orders">

                    <span className="orders-text">Orders</span>
                </NavLink>

                <NavLink className="cart-link header-link" to="/checkout">
                    <img className="cart-icon" src={cartIcon} />
                    <div className="cart-quantity">{totalQuantity}</div>
                    <div className="cart-text">Cart</div>
                </NavLink>
            </div>
        </div>
    )
}

export default Header