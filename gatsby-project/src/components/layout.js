import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Global } from "@emotion/core"

import Navigation from "../components/navigation"



const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          menuItems {
            text
            path
          }
        }
      }
    }
  `)

  return (
    <>
      
      
        <Navigation menuItems={data.site.siteMetadata.menuItems} />


    </>
  )
}

export default Layout