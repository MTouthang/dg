import React from 'react'
import { Container, Button } from 'reactstrap'
import { AiFillYoutube, AiFillInstagram, AiFillFacebook} from "react-icons/ai";
import { Link } from 'react-router-dom';
import "./style.css"


const Footer = () => {
  return (  
    <Container id='bottom_footer'
        fluid
        tag="footer"
        className="bg-dark text-center text-secondary  mt-5"
    >
      <p className='pt-3'> {`I'm a self-taught Realism artist specialising in Graphite and Charcoal drawings.
       I started art tutoring online a year ago and collaborated with e-learning platforms such as BitClass, MadCaps & VividTrails for art courses and workshops.
       I received my first national art award, the 'Bhartiya Kalaa Bhushan Award' from Indian Art Fair, Mumbai in 2021. 
       Am also the recipient of KALANAND Grant from the Prafulla Dahanukar Art Foundation in 2022 at the Jehangir Art Gallery, Mumbai.`}
</p>
      <h5 className='pt-3'> Please contact me for any kind of query or work</h5>
      <Button > 
        <a href="mailto:someone@gmail.com"
          className="text-decoration-none text-white"
        > Mail Me</a>
      </Button>
      <div className="mt-4 pb-2" hover> 
        <AiFillYoutube/>
        <span className="pe-4" >
          <Link to="https://youtube.com"
            className="text-decoration-none text-secondary"
          > Youtube</Link>
        </span>

        <AiFillInstagram/>
        <span className="pe-4"> 
        <a href="https://youtube.com"
            className="link text-decoration-none text-secondary"
          > Instagram</a>
        </span>


        <AiFillFacebook/>
        <span>
        <a href="https://youtube.com"
            className="link text-decoration-none text-secondary"
          > Facebook</a>
        </span>
      </div>
      <span>DG © 2022</span>
     
    </Container>
  )
}


export default Footer

