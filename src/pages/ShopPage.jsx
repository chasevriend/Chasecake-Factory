import React from 'react'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import Products from '../components/Products'
// import Shop from '../components/Shop'
// import Product from '../components/Product'

const ShopPage = () => {
  return (
    <>
        <Nav />
        {/* <Shop /> */}
        <Products />
        <Banner />
        <Footer />

    </>
  )
}

export default ShopPage