/** @jsx jsx */
import { jsx, useThemeUI, Header , Button} from "theme-ui"
import React from "react"


import { Link } from "gatsby"
import logo from "../images/logo.png"

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
// ]

const NavLink = ({ children, ...prop }) => {
  const { theme } = useThemeUI()

  return (
    <Link
      {...prop}
      sx={{
        display: "inline-block",
        px: 2,
        ml: 3,
        color: "text",
        textDecoration: "none",
        whiteSpace: "nowrap",
        letterSpacing: "wide",
        lineHeight: theme =>
          `calc(${theme.sizes.logo} - 2 * ${theme.sizes.navLinkBorder})`,
        borderTop: theme => `${theme.sizes.navLinkBorder} solid transparent`,
        borderBottom: theme => `${theme.sizes.navLinkBorder} solid transparent`,
        transition: "all 0.25s linear",
        "&:hover": {
          color: "primaryHover",
          borderBottom: theme =>
            `${theme.sizes.navLinkBorder} solid ${theme.colors.text}`,
        },
      }}
      activeStyle={{
        color: theme.colors.text,
        borderBottom: `${theme.sizes.navLinkBorder} solid ${theme.colors.text}`,
      }}
    >
      {children}
    </Link>
  )
}

const NavLinks = ({ menuItems }) => (
  <>
    {menuItems.map(menuItem => (
      <NavLink key={menuItem.path} to={menuItem.path}>
        {menuItem.text}
      </NavLink>
    ))}
  </>
)

const Navigation = ({ menuItems }) => {
  return (
    <Header
      sx={{
        justifyContent: "space-between",
        alignContent: "center",
      
      }}
    >
      <Link to="/" sx={{ display: "flex", alignItems: "center" }}>
        <img
          src={logo}
          sx={{
            height: "logo",
            width: "logo",
          }}
          alt="logo"
        />
        <h3 sx={{
          fontSize: [1,2,3,4, 5, 6],
          fontWeight: "medium",
        }}>eAgrar</h3>
      </Link>
      
      <nav>
        <NavLinks menuItems={menuItems} />
      </nav>

      <Link to="/login"  >
        <button ml="auto" sx={{
                backgroundColor:"primary",
                alignItems: "center",
                color:"text",
                borderRadius:"10px",
                borderColor:"primary",
                }}>
        SIGN IN
        </button>
      </Link>
      
    </Header>
  )
}

export default Navigation