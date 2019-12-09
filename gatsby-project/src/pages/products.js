/** @jsx jsx */

import { jsx} from "theme-ui"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProductList from "../components/productlist"
import FooterContainer from "../components/footer"

const ProductsPage = ({ data }) => {

 
    return (
    <div sx={{display:"flex",
            flexDirection:"column"
              
        }} >
        <Layout>
         <SEO title="Products" />
        </Layout>
        <ProductList></ProductList>
        <FooterContainer></FooterContainer>
       
    </div>
  )
}

export default ProductsPage