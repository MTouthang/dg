import React, {useState} from 'react'
import {Link} from "react-router-dom"
import { Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Nav, Collapse } from 'reactstrap'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
      <Navbar 
      expand='md'
      color='dark'
      dark
      sticky="top"
      >
      <NavbarBrand tag={Link} to="/" >
        DG
      </NavbarBrand>
      <NavbarToggler onClick={() => setIsOpen(!isOpen)} /> 
        <Collapse  isOpen= {isOpen} navbar>
          <Nav   className="ms-auto " navbar>
            <NavItem>
              <NavLink tag= {Link}to="/merch">
                Merch Store
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag= {Link}to="/products">
                Works
              </NavLink>
            </NavItem>
            
            <NavItem>
              <NavLink >
                <a className="text-decoration-none text-white-50"
                href="#bottom_footer">
                Contact Me
                </a>
              
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>

  )
}

export default NavBar