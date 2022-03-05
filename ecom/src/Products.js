import { useState, useEffect } from 'react'

import Skeleton from 'react-loading-skeleton'
import { NavLink } from 'react-router-dom'

export default function Products() {
  const [data, setData] = useState([])
  const [filter, setFilter] = useState(data)
  const [loading, setLoading] = useState(false)
  let componentMounted = true

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true)
      const response = await fetch('https://fakestoreapi.com/products')
      if (componentMounted) {
        setData(await response.clone().json())
        setFilter(await response.json())
        setLoading(false)
      }
      return () => {
        componentMounted = false
      }
    }
    getProducts()
  }, [])

  const Loading = () => {
    return (
      <>
        <div className='col-md-3'>
          <Skeleton height={350} />
        </div>
        <div className='col-md-3'>
          <Skeleton height={350} />
        </div>
        <div className='col-md-3'>
          <Skeleton height={350} />
        </div>
        <div className='col-md-3'>
          <Skeleton height={350} />
        </div>
      </>
    )
  }

  const filterProducts = (type) => {
    const updatedList = data.filter((product) => product.category === type)
    setFilter(updatedList)
  }
  const ShowProducts = () => {
    return (
      <>
        <div className='buttons d-flex justify-content-center mb-2 pb-5'>
          <button
            className='btn btn-outline-secondary me-2'
            onClick={() => setFilter(data)}
          >
            All
          </button>
          <button
            className='btn btn-outline-secondary me-2'
            onClick={() => filterProducts("men's clothing")}
          >
            Men's Clothing
          </button>
          <button
            className='btn btn-outline-secondary me-2'
            onClick={() => filterProducts("women's clothing")}
          >
            Women's Clothing
          </button>
          <button
            className='btn btn-outline-secondary me-2'
            onClick={() => filterProducts('jewelery')}
          >
            Jewellery
          </button>
          <button
            className='btn btn-outline-secondary'
            onClick={() => filterProducts('electronics')}
          >
            Electronics
          </button>
        </div>

        {filter.map((product) => {
          const { image, title, price, id } = product

          return (
            <>
              <div className='col-md-3 mb-4 '>
                <div class='card h-100 text-center p-4 ' key={id}>
                  <img
                    src={image}
                    class='card-img-top'
                    alt={title}
                    height='250px'
                  />
                  <div class='card-body'>
                    <h5 class='card-title mb-0'>{title.substring(0, 12)}...</h5>
                    <p class='card-text lead fw-bold'>${price}</p>
                    <NavLink
                      to={`/products/${id}`}
                      className='btn btn-outline-dark'
                    >
                      Buy Now
                    </NavLink>
                  </div>
                </div>
              </div>
            </>
          )
        })}
      </>
    )
  }

  return (
    <div>
      <div className='container my-5 py-5 '>
        <div className='row'>
          <div className='col-12 mb-5'>
            <h1 className='display-6 fw-bolder text-center'>Latest Products</h1>
            <hr />
          </div>
          <div className='row justify-content-center'>
            {loading ? <Loading /> : <ShowProducts />}
          </div>
        </div>
      </div>
    </div>
  )
}
