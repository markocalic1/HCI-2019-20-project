/** @jsx jsx */
import { jsx } from "theme-ui"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MyForm from "../components/contact-form"

const ContactPage = ({ data }) => {
  return (
    <div sx={{ display: "flex", flexDirection: "column", minHeight: "100%" }}>
      <Layout pageName="Contact">
        <SEO title="Contact" />
        <MyForm></MyForm>
      </Layout>
    </div>
  )
}

export default ContactPage
