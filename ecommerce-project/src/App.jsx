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

  const loadCart = async () => {
    const res = await axios.get('/api/cart-items?expand=product')
    setCart(res.data)
  }

  useEffect(() => {
    loadCart()
  }, [])

  return (
    <Routes>
      <Route /* path='/' or */ index element={<HomePage cart={cart} loadCart={loadCart} />} />
      <Route path='checkout' element={<CheckoutPage cart={cart} />} />
      <Route path='orders' element={<OrdersPage cart={cart} />} />
      <Route path='tracking/:orderId/:productId' element={<TrackingPage cart={cart} />} />
      <Route path='*' element={<PageNotFound cart={cart} />} />
    </Routes>
  )
}

export default App
