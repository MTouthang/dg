import React from 'react'
import Award from './body/Award'
import Course from './body/Course'
import Product from './body/Product'
import Intro from './intro/Intro'


const Home = ({courses}) => {
  return (
    <>
        <Intro />
        <Course courses={courses}/>
        <Award />
        <Product />
    </>
   
  )
}

export default Home