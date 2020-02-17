import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import LoginForm from "../components/loginform"
import FooterContainer from "../components/footer"

const LoginPage = () => (
  <div>
    <Layout>
    <SEO title="Login" />
    </Layout>
    <LoginForm></LoginForm>
    <FooterContainer></FooterContainer>
</div>


export default LoginPage
