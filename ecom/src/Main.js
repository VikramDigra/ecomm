import React from 'react'
import Products from './Products'

export default function Main() {
  return (
    <>
      <div className='hero'>
        <div
          className='container-xl 
        text-white border-0 d-flex flex-column justify-content-center '
        >
          <div className='container-fluid'>
            <h5 className=' card-tittle display-3 fw-bold mb-0'>
              NEW SEASON ARRIVALS
            </h5>
            <p className='card-text lead fs-2 '>CHECK OUT ALL THE TRENDS</p>
          </div>
        </div>
        <Products />
      </div>
    </>
  )
}
