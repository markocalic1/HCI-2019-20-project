/** @jsx jsx */
import { jsx } from "theme-ui"

import Layout from "../components/layout"
import SEO from "../components/seo"
import StyledBackgroundSection from "../components/background"
import AboutSection from "../components/about"
import FeaturesSection from "../components/features"
import SupportSection from "../components/supportsection"

const IndexPage = ({ data }) => {
  return (
    <div style={{ width: "100%" }}>
      <Layout pageName="Home">
        <SEO title="Naslovna" />
        <StyledBackgroundSection></StyledBackgroundSection>
        <FeaturesSection></FeaturesSection>
        <SupportSection></SupportSection>
      </Layout>
    </div>
  )
}

export default IndexPage
