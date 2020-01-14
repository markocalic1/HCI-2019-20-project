import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, navigate } from "gatsby"
import { getCurrentUser, isLoggedIn, logout } from "../utils/auth"


const ProfilePage = () => <div>
    <Layout>
    <SEO title="Profile" />
    </Layout>
    <h1>Your profile</h1>
    <ul>
    <li>Name: {getCurrentUser().name}</li>
      <li>E-mail: {getCurrentUser().email}</li>
    </ul>
  
</div>

export default ProfilePage