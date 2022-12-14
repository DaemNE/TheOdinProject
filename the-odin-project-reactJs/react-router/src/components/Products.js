import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Products() {
  return (
    <>
        <div>
            <input type="search" placeholder='Search products..'/>
        </div>
        <nav>
            <Link to="/products/featured">Featured</Link>
            <Link to="/products/new">New </Link>
        </nav>
        <Outlet />
    </>
  )
}

export default Products