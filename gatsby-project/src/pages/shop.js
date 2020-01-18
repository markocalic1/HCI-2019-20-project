/** @jsx jsx */

import { jsx} from "theme-ui"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import ProductList from "../components/product-item"

const ShopPage = ({ data }) => {

 
    return (
    <div >
        <Layout pageName="Shop">
         <SEO title="Shop" />
        <ProductList items={data.products}></ProductList>
        </Layout>
       
    </div>
  )
}

export const query = graphql`
{
  products: allContentfulProductItem {
    edges {
      node {
        id
        title
        description {
          description
        }
        price
        category
        image {
          fluid(maxHeight:400 , maxWidth:400 , quality:100) {
            src
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
        }
      }
    }
  }
}
`

export default ShopPage