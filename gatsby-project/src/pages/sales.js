import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import { getUser, isLoggedIn } from "../utils/auth"
import ViewProfile from "../components/viewprofile"


const SalesPage = () => <div>
    <Layout>
    <SEO title="Sales" />
        Sales page 
    </Layout>
    <ViewProfile></ViewProfile>
</div>

export default SalesPage