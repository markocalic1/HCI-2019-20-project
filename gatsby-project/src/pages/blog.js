/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {  graphql, StaticQuery } from "gatsby"
import Post from "../components/post"
import {Row ,Col, Pagination} from 'reactstrap'
import Sidebar from '../components/sidebar'
import React from "react"
import PaginationLinks from '../components/paginationLinks'



const blogQuery = graphql`
{
  allMdx(filter: {fileAbsolutePath: {regex: "//content/posts//"}, frontmatter: {title: {ne: "true"}}},limit:3) {
    totalCount  
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
        body
      }
    }
  }
}
`
const BlogPage = () => {
  const postsPerPage =3;
  let numberOfPages 

  return(

        <>
          <div>
            
            <Layout>
              <SEO title="Blog" />
                    
              <Row style={{margin:"auto" ,padding:"5vh"}}>
                <Col md="8">
                  <div sx={{ }}>
                    
                    <StaticQuery
                      query ={blogQuery}
                      render={data =>{
                        numberOfPages = Math.ceil(data.allMdx.totalCount / postsPerPage)
                        console.log(numberOfPages)
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
                            <PaginationLinks currentPage={1} numberOfPages={numberOfPages}></PaginationLinks>

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

              </Layout>


          </div>
          
         
        </>
  )
}
   
  
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