import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Navigation from "../components/navigation"
import FooterContainer from "../components/footer"
import ScrollToTop from "../components/scrollToTopBtn"

const Layout = ({ children, pageName }) => {
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
      <Navigation
        menuItems={data.site.siteMetadata.menuItems}
        pageName={pageName}
      />
      .<div style={{ marginTop: "50px" }}>{children}</div>
      <FooterContainer></FooterContainer>
      <ScrollToTop></ScrollToTop>
    </>
  )
}

export default Layout
