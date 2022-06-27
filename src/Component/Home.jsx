import React from 'react'
import Award from './body/Award'
import Course from './body/Course'
import Product from './body/Product'
import Intro from './intro/Intro'


const Home = () => {
  return (
    <>
        <Intro />
        <Course />
        <Award />
        <Product />
    </>
   
  )
}

export default Home