import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import LoginForm from "../components/loginform"


const LoginPage = () => {
  return (
    <div sx={{ display: "flex", flexDirection: "column", minHeight: "100%"}}>
      <Layout pageName="Login">
        <SEO title="Login" />
        <LoginForm></LoginForm>
      </Layout>
    </div>
  )
}

export default LoginPage
