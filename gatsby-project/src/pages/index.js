/** @jsx jsx */
import { jsx } from "theme-ui"

import Layout from "../components/layout"
import SEO from "../components/seo"
import StyledBackgroundSection from "../components/background"
import FeaturesSection from "../components/features"
import SupportSection from "../components/supportsection"
import Awards from "../components/awards"

const IndexPage = ({ data }) => {
  return (
    <div style={{ width: "100%" }}>
      <Layout pageName="Home">
        <SEO title="Naslovna" />
        <StyledBackgroundSection></StyledBackgroundSection>
        <FeaturesSection></FeaturesSection>
        <Awards></Awards>
        <SupportSection></SupportSection>
      </Layout>
    </div>
  )
}

export default IndexPage
