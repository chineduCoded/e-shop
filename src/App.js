import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Cart } from './components/Cart'
import { Navbar } from './components/Navbar'
// import { OnHover } from './components/OnHover'
import { PageNotFound } from './components/PageNotFound'
import ProductDetail from './components/ProductDetail'
import Shop from './components/Shop'
import { SignUp } from './components/SignUp'


const App = () => {
  return (
    <Router>
      <Navbar />
      {/* <OnHover /> */}
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="products/:id" element={<ProductDetail />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  )
}

export default App
