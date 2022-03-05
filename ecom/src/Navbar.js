import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'

export default function Navbar() {
  const state = useSelector((state) => state.handleCart)

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container-fluid'>
        <NavLink className='navbar-brand fw-bold fs-4' to='/'>
          SHOP NOW
        </NavLink>

        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#toggleMobileMenu'
          aria-controls='toggleMobileMenu'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='toggleMobileMenu'>
          <ul className='navbar-nav mx-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <NavLink className='nav-link ' aria-current='page' to='/'>
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/products'>
                Products
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/about'>
                About
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/contact'>
                Contacts
              </NavLink>
            </li>
          </ul>
          <div className='buttons'>
            <NavLink to='/signin' className='btn btn-outline-dark '>
              <i className='fa fa-sign-in me-1'></i>
              Login
            </NavLink>
            <NavLink to='/register' className='btn btn-outline-dark ms-2'>
              <i className='fa fa-user-plus me-1'></i>Register
            </NavLink>
            <NavLink to='/cart' className='btn btn-outline-dark ms-2'>
              <i className='fa fa-shopping-cart me-1'> </i>Cart({state.length})
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}