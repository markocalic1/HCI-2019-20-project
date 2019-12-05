import { jsx, Styled } from "theme-ui"
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import StyledBackgroundSection from "../components/background"
import AboutSection from "../components/about"
import FooterContainer from "../components/footer"

const IndexPage = ({ data }) => {

 
    return (
    <div sx={{display:"flex",
            flexDirection:"column"
              
        }} >
        <Layout>
         <SEO title="Products" />
        </Layout>
        
        <FooterContainer></FooterContainer>
       
    </div>
  )
}

export default IndexPage