/** @jsx jsx */
import { jsx } from "theme-ui"

import Layout from "../components/layout"
import SEO from "../components/seo"
import StyledBackgroundSection from "../components/background"
import AboutSection from "../components/about"

const IndexPage = ({ data }) => {

 
    return (
    <div >
        <Layout>
         <SEO title="Naslovna" />
          <StyledBackgroundSection></StyledBackgroundSection>
          <AboutSection></AboutSection>
        </Layout>
        
       
    </div>
  )
}

export default IndexPage


