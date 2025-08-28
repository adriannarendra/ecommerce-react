import './App.css'
import CheckoutPage from './pages/checkout/CheckoutPage'
import HomePage from './pages/home/HomePage'
import { Routes, Route } from 'react-router'
import { OrdersPage } from './pages/orders/OrdersPage'
import TrackingPage from './pages/TrackingPage'
import PageNotFound from './pages/PageNotFound'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get('/api/cart-items?expand=product')
      .then((res) => {
        setCart(res.data)
      })
  }, [])

  return (
    <Routes>
      <Route /* path='/' or */ index element={<HomePage cart={cart} />} />
      <Route path='checkout' element={<CheckoutPage cart={cart} />} />
      <Route path='orders' element={<OrdersPage cart={cart} />} />
      <Route path='tracking' element={<TrackingPage />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  )
}

export default App
