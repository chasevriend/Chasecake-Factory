import React from 'react'
import About from '../components/About'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Nav from '../components/Nav'

const HomePage = () => {
  return (
    <>
        <Nav />
        <Hero />
        <About />
        <Banner />
        <Footer />
    </>
  )
}

export default HomePage