import PropTypes from "prop-types"
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
  
  } from 'reactstrap';

  import 'bootstrap/dist/css/bootstrap.min.css';
  import mainLogo from"../images/logo.png";
  import { Button } from 'reactstrap';
  import navbarStyles from "./navbar.module.css"




  const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div>
        <Navbar color="light" className="navbar-dark bg-dark" light expand="md">
        <NavbarBrand href="/" className=""><img  src={mainLogo} height="50" className="m-auto" alt="fireSpot"/>eAgrar</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mx-auto text-white" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/features">Features</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Station
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="/products">Products</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/blog">Blog</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">Contact</NavLink>
            </NavItem>
              
            </Nav>
          </Collapse>
          <Button href="/login" className={navbarStyles.signin }>SIGN IN</Button>{' '}
        </Navbar>
      </div>
    );
  }

  Header.propTypes = {
    siteTitle :PropTypes.string
    // pass in custom element to use
  }
  
  export default Header;