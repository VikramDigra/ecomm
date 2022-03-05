import React from 'react'
import Main from './Main'
import Navbar from './Navbar'
import { Routes, Route } from 'react-router-dom'
import Products from './Products'
import Product from './Product'
import Cart from './Cart'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route exact path='/products' element={<Products />} />
        <Route exact path='/products/:id' element={<Product />} />
        <Route exact path='/cart' element={<Cart />} />
      </Routes>
    </>
  )
}

export default App
