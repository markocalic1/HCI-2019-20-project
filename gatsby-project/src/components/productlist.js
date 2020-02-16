/** @jsx jsx */
import { jsx } from "theme-ui"

import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import {
  Card,
  CardText,
  CardBody,
  CardSubtitle,
  Button,
  CardHeader,
} from "reactstrap"

const ProductList = () => {
  const data = useStaticQuery(graphql`
    {
      allMdx(
        filter: {
          fileAbsolutePath: { regex: "//content/products//" }
          frontmatter: { title: { ne: "true" } }
        }
      ) {
        products: edges {
          product: node {
            id
            frontmatter {
              name
              price
              description
              image {
                childImageSharp {
                  fluid(maxHeight: 400, maxWidth: 400, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const {
    allMdx: { products },
  } = data

  return (
    <div style={{ textAlign: "center", margin: "auto" }}>
      {products &&
        products.map(({ product }) => {
          return (
            <div
              key={product.id}
              sx={{
                display: "inline-flex",
                padding: 4,
              }}
            >
              <Card>
                <CardHeader className="text-uppercase  h4">
                  {product.frontmatter.name}
                </CardHeader>
                <Img
                  fluid={product.frontmatter.image.childImageSharp.fluid}
                  alt={product.frontmatter.image.childImageSharp.fluid.id}
                  sx={{
                    margin: "auto",
                    width: "40vh",
                    height: "vh",
                  }}
                />
                <CardBody
                  className="text-center"
                  style={{ width: "40vh", height: "40vh" }}
                >
                  <CardSubtitle className="h5">
                    Prize: {product.frontmatter.price}
                  </CardSubtitle>
                  <CardText style={{ textAlign: "left", height: "20vh" }}>
                    {product.frontmatter.description}
                  </CardText>

                  <Button style={{ backgroundColor: "#167d26" }}>Order</Button>
                </CardBody>
              </Card>
            </div>
          )
        })}
    </div>
  )
}

export default ProductList
