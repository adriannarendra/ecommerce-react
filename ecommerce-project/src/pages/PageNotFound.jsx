import React from 'react'
import Header from '../components/Header'
import './PageNotFound.css'

const PageNotFound = ({ cart }) => {
    return (
        <>
            <Header cart={cart} />
            <h1>404 Not Found</h1>
        </>
    )
}

export default PageNotFound