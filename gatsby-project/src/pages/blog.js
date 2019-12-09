import React ,{ Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"


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
            
          </div>
  
          <h1>Posts</h1>
          {data.allWordpressPost.edges.map(({ node }) => (
            <div key={node.slug}>
              <Link to={node.slug}>
                <h2>{node.title}</h2>
              </Link>
              <h3 dangerouslySetInnerHTML={{ __html:node.excerpt}}/>
            </div>
          ))}
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
          }
        }
      }
      allWordpressPost {
        edges {
          node {
            title
            excerpt
            slug
          }
        }
      }
    }
  `