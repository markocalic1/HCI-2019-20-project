/** @jsx jsx */

import { jsx} from "theme-ui"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProductList from "../components/productlist"

const ProductsPage = ({ data }) => {

 
    return (
    <div sx={{display:"flex",
            flexDirection:"column"
              
        }} >
        <Layout pageName="Products">
         <SEO title="Products" />
         <ProductList></ProductList>
        </Layout>
       
    </div>
  )
}

export default ProductsPage