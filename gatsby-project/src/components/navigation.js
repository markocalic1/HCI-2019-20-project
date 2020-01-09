import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink

  } from 'reactstrap';

  import 'bootstrap/dist/css/bootstrap.min.css';
  import mainLogo from"../images/logo.png";
  import { Button } from 'reactstrap';
  import navbarStyles from "./navbar.module.css"
  import { globalHistory as history } from '@reach/router'

// const menuItems = [
//   {
//     text: "Naslovna",
//     path: "/",
//   },
//   {
//     text: "Predavanja",
//     path: "/predavanja",
//   },
//   {
//     text: "Projekti",
//     path: "/projekti",
//   },
//   {
//     text: "Rezultati",
//     path: "/rezultati",
//   },
//   {
//     text: "Ocjenjivanje",
//     path: "/ocjenjivanje",
//   },
//   {
//     text: "Blog",
//     path: "/blog",
//   },
//   {
//     text: "Q&A",
//     path: "/questions",
//   },
const isCurrent =(path,href) => {
if (href==="/"){

}
else{
  href+="/"
}
  return (path===href) ? true : false
}


const SomeComponent = () => {
  const { location } = history
  return location.pathname
  
}
const path = SomeComponent()

const NavLinks = ({ menuItems }) => (
  <>
    
    {menuItems.map(menuItem => (
      
      <NavItem >
        <NavLink className={navbarStyles.navlink} active={isCurrent(path, menuItem.path)}  key={menuItem.path} href={menuItem.path}>{menuItem.text}</NavLink>
        

      </NavItem>
    ))}
  </>
)

const Navigation = ({ menuItems }) => {
  
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
        <Navbar color="light" className="navbar-dark bg-dark" light expand="md">
        <NavbarBrand href="/" className=""><img  src={mainLogo} height="50" className="m-auto" alt="fireSpot"/>eAgrar</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mx-auto text-white" navbar>
             <NavLinks menuItems={menuItems} />
          </Nav>
          <Button href="/login" className={navbarStyles.signin }>SIGN IN</Button>

          </Collapse>
        </Navbar>
      </div>
    
      
      
      
  )
}

export default Navigation