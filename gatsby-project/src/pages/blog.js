/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import React ,{ Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"
import StyledBackgroundSection from "../components/background"
import Img from 'gatsby-image'
import navbarStyles from "../components/navbar.module.css"

import {
  Card, CardImg, CardText, CardBody, CardFooter,
  CardTitle, Button
} from 'reactstrap';

class BlogPage extends Component {
    render() {
      const data = this.props.data

      return (
        <>
          <div>
            <Layout>
                <SEO title="Blog" />
                    Blog page 
            </Layout>
            <div className={navbarStyles.overlay} >
              <Img
                  sx={{height:"30vh"}}
                  Tag="section"
                  fluid={data.desktop.childImageSharp.fluid}
                  backgroundColor={`#040e18`}
                  >
              </Img>
            </div>

          </div>
          <div sx={{ padding:"3vh"}}>
            <h3>Posts</h3>
            {data.allWordpressPost.edges.map(({ node }) => (
              <div key={node.slug} sx={{ paddingBottom:"2vh"}}>
                <Card>
                  <CardBody sx={{padding:"0.2rem"}}>
                    <CardTitle sx={{fontWeight:"bold",
                                    fontSize:[2,3,4]
                                    }}>{node.title}</CardTitle>
                  </CardBody>
                  <CardBody>
                    <CardText dangerouslySetInnerHTML={{ __html:node.excerpt}}/>
                    <Button color="success" href={node.slug}>Read More -></Button>
                  </CardBody>
                  <CardFooter>Posted on {node.date}</CardFooter>

                </Card>
              </div>
            
            ))}
          </div>
        </>
      )
    }
  }
  
  export default BlogPage
  
  export const pageQuery = graphql`
    query {
      allWordpressPage {
        edges {
          node {
            id
            title
            excerpt
            slug
            date(formatString: "MMMM D, YYYY")
          }
        }
      }
      allWordpressPost {
        edges {
          node {
            title
            excerpt
            slug
            date(formatString: "MMMM D, YYYY")
          }
        }
      }
      desktop: file(relativePath: {eq: "background.webp"}) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp         
          }
        }
      }
    }
  `