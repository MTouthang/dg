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
      <p className='pt-3'> Please contact me for any kind of query or work</p>
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

