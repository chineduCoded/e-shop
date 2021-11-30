import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Collection from './components/Collection'
import HeaderNav from './components/HeaderNav'
import ProductDetail from './components/ProductDetail'
import Shop from './components/Shop'

const App = () => {
  return (
    <Router>
      <HeaderNav />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="products/:id" element={<ProductDetail />} />
        <Route path="collections" element={<Collection />} />
      </Routes>
    </Router>
  )
}

export default App
