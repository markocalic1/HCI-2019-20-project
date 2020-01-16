/** @jsx jsx */

import { jsx} from "theme-ui"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SalesPage = ({ data }) => {

 
    return (
    <div >
        <Layout pageName="Sales">
         <SEO title="Sales" />

        </Layout>
       
    </div>
  )
}



export default SalesPage