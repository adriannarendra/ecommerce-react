import React from 'react'
import Header from '../components/Header'
import './PageNotFound.css'
import { Link } from 'react-router'

const PageNotFound = ({ cart }) => {
    return (
        <>
            <Header cart={cart} />
            <h1>404 Not Found</h1>
            <Link 
                to='/'
            >
                Go To Home
            </Link>
        </>
    )
}

export default PageNotFound