import React from 'react'
import Home from './pages/home/Home';
import Order from './pages/order/Order';
import Cart from './pages/cart/Cart';
import Dashboard from './pages/admin/dashboard/Dashboard';
import NoPage from './pages/nopage/NoPage';
import MyState from './context/data/myState';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <MyState>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path="/order" element={<Order />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/*" element={<NoPage />} />
      </Routes>
    </MyState>


  )
}
export default App
