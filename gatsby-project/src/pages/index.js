
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import StyledBackgroundSection from "../components/background"
import AboutSection from "../components/about"

const IndexPage = ({ data }) => {

 
    return (
    <>
        <Layout>
         <SEO title="Naslovna" />
        </Layout>
        <StyledBackgroundSection></StyledBackgroundSection>
        <AboutSection></AboutSection>
       
    </>
  )
}

export default IndexPage


