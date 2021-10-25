import React from 'react'
import Carousel from '../components/Carousel'
import Footer from '../components/layout/Footer'
import Nav from '../components/layout/Nav'
import Product from '../components/Product'
import Trending from '../components/Trending'

const Home = () => {
    return (
        <>
            <Nav />
            <Carousel/>
            <Product />
            <Trending/>
            <Footer/>
        </>
    )
}

export default Home
