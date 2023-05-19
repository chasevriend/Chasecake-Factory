import React, { useContext, useState, createContext } from 'react'
import { useParams } from 'react-router';
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import "../css/Product.css";
import { items } from '../data/Data';

const ProductPage = () => {
  
    return (
    <>
        <Nav />

        <Banner />
        <Footer />
    </>
  )
}

export default ProductPage