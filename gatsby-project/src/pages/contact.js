/** @jsx jsx */
import { jsx } from "theme-ui"

import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import FooterContainer from "../components/footer"
import ContactForm from "../components/contactform"

const ContactPage = () => <div>
    <Layout>
    <SEO title="Contact" />
    </Layout>
    <ContactForm></ContactForm>
    <FooterContainer></FooterContainer>
</div>

export default ContactPage