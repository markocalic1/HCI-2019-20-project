/** @jsx jsx */

import { jsx} from "theme-ui"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = ({ data }) => {

 
    return (
    <div sx={{display:"flex",
            flexDirection:"column"
              
        }} >
        <Layout pageName="Contact">
         <SEO title="Contact" />

        </Layout>
       
    </div>
  )
}



export default ContactPage