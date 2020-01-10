/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import React ,{ Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, graphql, StaticQuery } from "gatsby"
import StyledBackgroundSection from "../components/background"
import Img from 'gatsby-image'
import navbarStyles from "../components/navbar.module.css"
import Post from "../components/post"
import {Row ,Col} from 'reactstrap'

const blogQuery = graphql`
{
  allMdx(filter: {fileAbsolutePath: {regex: "//content/posts//"}, frontmatter: {title: {ne: "true"}}}) {
    posts: edges {
      post: node {
        id
        frontmatter {
          title
          date
          path
          author
          image{
            childImageSharp{
              fluid(quality: 90, maxWidth: 1920) {
                  ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          tags
        }
        excerpt
      }
    }
  }
}
`
const BlogPage = () => (

        <>
          <div>
            
            <Layout>
              <SEO title="Blog" />
                    Blog page 
            </Layout>
              <Row sx={{margin:"auto" ,padding:"5vh"}}>
                <Col md="8">
                  <div sx={{ }}>
                    
                    <StaticQuery
                      query ={blogQuery}
                      render={data =>{
                        return (
                          <div  >
                            {data.allMdx.posts.map(({post}) =>(
                              <Post  
                              title={post.frontmatter.title }
                              author={post.frontmatter.author}
                              date={post.frontmatter.date}
                              path={post.frontmatter.path}
                              body={post.excerpt}
                              fluid={post.frontmatter.image.childImageSharp.fluid}
                              tags={post.frontmatter.tags}
                              />
                            ))}
                          </div>
                        )
                      }}
                    />
                  </div>
                </Col>
                <Col md="4">
                    <div sx={{
                      width:"100%" , 
                      height:"100%" ,
                      backgroundColor:"#e5e5e5b5",
                      margin:""}} >

                    </div>
                </Col>
              </Row>

            

          </div>
          
         
        </>
      )
   
  
  export default BlogPage
  
  // export const pageQuery = graphql`
  //   query {
  //     allWordpressPage {
  //       edges {
  //         node {
  //           id
  //           title
  //           excerpt
  //           slug
  //           date(formatString: "MMMM D, YYYY")
  //         }
  //       }
  //     }
  //     allWordpressPost {
  //       edges {
  //         node {
  //           title
  //           excerpt
  //           slug
  //           date(formatString: "MMMM D, YYYY")
  //           categories {
  //             name
  //             id
  //           }
  //         }
  //       }
  //     }
  //     desktop: file(relativePath: {eq: "background.webp"}) {
  //       childImageSharp {
  //         fluid(quality: 90, maxWidth: 1920) {
  //           ...GatsbyImageSharpFluid_withWebp         
  //         }
  //       }
  //     }
  //   }
  // `