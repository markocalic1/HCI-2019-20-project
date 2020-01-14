import React from 'react'
import Layout from '../components/layout'
import Post from '../components/post'
import SEO from '../components/seo'
import Sidebar from '../components/sidebar'
import { Row , Col } from 'reactstrap'
import { graphql } from 'gatsby'

const postList = props => {
    const posts = props.data.allMdx.edges
    const { currentPage } = props.pageContext
    console.log(posts)
    return (
        <Layout>
              <SEO title="Blog" />
                    
              <Row style={{margin:"auto" ,padding:"5vh"}}>
                <Col md="8">
                  <div sx={{ }}>                    
                    {posts.map(({node}) =>(
                        <Post  
                            key={node.excerpt}
                            title={node.frontmatter.title }
                            author={node.frontmatter.author}
                            date={node.frontmatter.date}
                            slug={node.fields.slug}
                            body={node.excerpt}
                            fluid={node.frontmatter.image.childImageSharp.fluid}
                            tags={node.frontmatter.tags}
                        />
                    ))}
                   </div>
                     
                </Col>
                <Col md="4">
                    
                    <Sidebar/>
                </Col>
              </Row>

              </Layout>


    )

}

export const poostListQuery = graphql`
    query postListQuery($skip: Int! , $limit: Int!){
        allMdx(filter: {fileAbsolutePath: {regex: "//content/posts//"}},sort: {fields: frontmatter___date, order: DESC} 
             limit: $limit
             skip: $skip
             ) {
          edges {
            node {
              id
              frontmatter {
                title
                date
                author
                tags
                image {
                  childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp

                    }
                  }
                }
              }
              fields {
                slug
              }
              excerpt
            }
          }
        }
      }
`

export default postList