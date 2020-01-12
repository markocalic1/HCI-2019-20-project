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
import Sidebar from '../components/sidebar'
import FooterContainer from "../components/footer"

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
        fields{
          slug
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
                              key={post.id}
                              title={post.frontmatter.title }
                              author={post.frontmatter.author}
                              date={post.frontmatter.date}
                              slug={post.fields.slug}
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
                    
                    <Sidebar/>
                </Col>
              </Row>

              <FooterContainer></FooterContainer>


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