import React, { useState } from 'react'
import './Header.css'
import { NavLink, useNavigate, useSearchParams } from 'react-router'
import logoWhite from '../assets/images/logo-white.png'
import mobileLogoWhite from '../assets/images/mobile-logo-white.png'
import cartIcon from '../assets/images/icons/cart-icon.png'
import searchIcon from '../assets/images/icons/search-icon.png'

const Header = ({ cart }) => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const searchValue = searchParams.get('search');

    const [searchInput, setSearchInput] = useState(searchValue ? searchValue : '');
    let totalQuantity = 0;

    cart && cart.forEach(cartItem => {
        totalQuantity += cartItem.quantity
    });

    const updateSearch = (e) => { setSearchInput(e.target.value) }

    const navigateSearch = () => {
        navigate(`/?search=${searchInput}`)
    }

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
                    value={searchInput}
                    onChange={updateSearch}
                    onKeyDown={ (e) => { e.key === 'Enter' && navigateSearch()} }
                />

                <button
                    className="search-button"
                    onClick={ navigateSearch }
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