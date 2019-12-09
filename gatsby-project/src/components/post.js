import React, { Component } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import SEO from "../components/seo"


class Post extends Component {
  render() {
    const post = this.props.data.wordpressPost

    return (
        <div>
            <Layout>
                <SEO title="Blog" />
                    Blog page 
            </Layout>
        <h1 dangerouslySetInnerHTML={{__html: post.title}}/>
        <div dangerouslySetInnerHTML={{__html:post.content}}/>
      </div>
    )
  }
}

Post.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default Post

export const postQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
    }
    site {
      siteMetadata {
        title
        
      }
    }
  }
`