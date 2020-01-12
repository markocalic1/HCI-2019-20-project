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

// const isCurrent =(path,href) => {
// if (href==="/"){

// }
// else{
//   href+="/"
// }
//   return (path===href) ? true : false
// }

const isPartiallyActive = ({
  isPartiallyCurrent
}) => {
  return isPartiallyCurrent
    ? true
    : false
}

const isActive = ({ isCurrent }) => {
  return isCurrent ?  { className: 'navlink-active navlink' }
  : { className: 'navlink' }
}

const NavLinks = ({ menuItems }) => (
  <>
    
    {menuItems.map(menuItem => (
      
      <NavItem >
        <NavLink href={menuItem.path} activestyle={navbarStyles} >{menuItem.text}</NavLink>
        

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