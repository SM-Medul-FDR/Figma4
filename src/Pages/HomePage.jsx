import React from 'react'
import Nav from '../Components/Nav/Nav'
import Banner from '../Components/Banner/Banner'
import Explore from '../Components/Explore/Explore'
import ToDo from '../Components/ToDo/ToDo'
import Deals from '../Components/Deals/Deals'
import Plan from '../Components/Plan/Plan'
import AboutUs from '../Components/AboutUs/AboutUs'
import Blog from '../Components/Blog/Blog'
import Footer from '../Components/Footer/Footer'

const HomePage = () => {
  return (
    <>
    
                {/* ---------------------------  Components ------------- */}
                {/* <Nav/> */}
                <Banner/>
                <Explore/>
                <ToDo/>
                <Deals/>
                <Plan/>
                <AboutUs/>
                <Blog/>
                <Footer/>

    </>
  )
}

export default HomePage