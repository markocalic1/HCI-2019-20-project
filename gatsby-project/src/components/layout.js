import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Navigation from "../components/navigation"
import FooterContainer from "../components/footer"



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
      
      
        <Navigation menuItems={data.site.siteMetadata.menuItems}/>
        <div style={{marginTop:"75px"}}>
          {children}
        </div>
        
        <FooterContainer></FooterContainer>

    </>
  )
}

export default Layout