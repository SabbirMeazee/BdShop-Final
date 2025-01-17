import React from 'react'
import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';
import Dashboard from './pages/admin/dashboard/Dashboard';
import NoPage from './pages/nopage/NoPage';
import MyState from './context/data/myState';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/registration/Login';
import Signup from './pages/registration/Signup';
import ProductInfo from './pages/productInfo/ProductInfo';
import { ToastContainer } from 'react-toastify';
import AddProduct from './pages/admin/AddProduct';
import Aboutus from './pages/Aboutus/Aboutus';
import Blog from './pages/aboutus/Blog';
function App() {
  return (
    <MyState>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path="/aboutus" element={<Aboutus></Aboutus>} />
        <Route path="/blog" element={<Blog></Blog>} />
        <Route path="/cart" element={<Cart />} />

        <Route path="/dashboard" element={<ProtectedRoutesForAdmin>
          <Dashboard />
        </ProtectedRoutesForAdmin>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signup" element={<Signup></Signup>} />
        <Route path="/addproduct" element={
          <ProtectedRoutesForAdmin>
            <AddProduct></AddProduct>
          </ProtectedRoutesForAdmin>
        } />
        <Route path="/productinfo/:id" element={<ProductInfo></ProductInfo>} />
        <Route path="/*" element={<NoPage />} />
      </Routes>
      <ToastContainer></ToastContainer>
    </MyState>


  )
}
export default App

// for user
export const ProtectedRoutes = ({ children }) => {
  const user = localStorage.getItem('user');
  if (user) {
    return children
  }
  else {
    return <Navigate to='/login' />
  }
}

// for admin
export const ProtectedRoutesForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem('user'))
  // console.log(admin.user.email)
  if (admin.user.email === 'sabbir123@gmail.com') {
    return children
  }
  else {
    return <Navigate to='/login' />
  }
}