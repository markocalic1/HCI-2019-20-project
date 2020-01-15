import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout'
import Post from '../components/post'
import SEO from '../components/seo'
import Sidebar from '../components/sidebar'
import { Row , Col } from 'reactstrap'

const TagPosts = ({data ,  pageContext}) => {
    const { tag } = pageContext
    const {totalCount} = data.allMdx
    const pageHeader = `${totalCount} post${totalCount===1 ? '' : 's'} tagged with "${tag}"`

    return(
        <Layout>
            <SEO title="Tags" />
            
            <Row style={{margin:"auto" ,padding:"1vh"}}>
                <Col md="8">
                    <h1>{pageHeader}</h1>
                    {data.allMdx.edges.map(({node}) => (
                        <Post  
                        key={node.id}
                        title={node.frontmatter.title }
                        author={node.frontmatter.author}
                        date={node.frontmatter.date}
                        slug={node.fields.slug}
                        body={node.excerpt}
                        fluid={node.frontmatter.image.childImageSharp.fluid}
                        tags={node.frontmatter.tags}
                        />
                    ))}
                </Col>
                <Col md="4">
                    <Sidebar></Sidebar>
                </Col>
            </Row>
        </Layout>
    )
}

export const tagQuery = graphql`
    query($tag : String!){
        allMdx(
            sort: {fields: [frontmatter___date], order: DESC}, 
            filter: {frontmatter: {tags: {in: [$tag] } } }
            ){
          totalCount
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

export default TagPosts