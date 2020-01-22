import React, { useState } from "react"

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap"

import "bootstrap/dist/css/bootstrap.min.css"
import mainLogo from "../images/logo.webp"
import { Button } from "reactstrap"
import navbarStyles from "./style/navbar.module.css"
import "./style/features.css"
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

let isCurrent = false

const NavLinks = ({ menuItems, pageName }) => (
  <>
    {menuItems.map(menuItem => (
      <NavItem>
        {menuItem.text === pageName ? (isCurrent = true) : (isCurrent = false)}

        <NavLink key={menuItem.path} href={menuItem.path} active={isCurrent}>
          {menuItem.text}
        </NavLink>
      </NavItem>
    ))}
  </>
)

const Navigation = ({ menuItems, pageName }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)
  return (
    <div
      style={{ position: "fixed", top: "0px", width: "100%", zIndex: "10000" }}
    >
      <Navbar color="light" className="navbar-dark bg-dark" light expand="md">
        <NavbarBrand href="/" className="">
          <img src={mainLogo} height="50" className="m-auto" alt="fireSpot" />
          eAgrar
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mx-auto text-white" navbar>
            <NavLinks menuItems={menuItems} pageName={pageName} />
          </Nav>
          {/* <FontAwesomeIcon
            icon={faCartArrowDown}
            size="1x"
            color="white"
            className="cart-icon snipcart-checkout"
            style={{ marginRight: "10px" }}
          >
            Cart
          </FontAwesomeIcon> */}
          <Button href="/login" className={navbarStyles.signin}>
            SIGN IN
          </Button>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Navigation
