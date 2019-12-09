/** @jsx jsx */
import { jsx } from "theme-ui"

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
         <SEO title="Naslovna" />
        </Layout>
        <StyledBackgroundSection></StyledBackgroundSection>
        <AboutSection></AboutSection>
        <FooterContainer></FooterContainer>
       
    </div>
  )
}

export default IndexPage


