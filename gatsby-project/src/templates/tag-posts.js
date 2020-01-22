import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Post from "../components/post"
import SEO from "../components/seo"
import Sidebar from "../components/sidebar"
import { Row, Col } from "reactstrap"

const TagPosts = ({ data, pageContext }) => {
  const { category } = pageContext
  const { totalCount } = data.posts
  const pageHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${category}"`

  return (
    <Layout pageName="Blog">
      <SEO title="Tags" />

      <Row style={{ margin: "auto", padding: "1vh" }}>
        <Col md="8">
          <h1>{pageHeader}</h1>
          {data.posts.edges.map(({ node }) => (
            <Post
              key={node.id}
              title={node.title}
              author={node.author}
              date={node.date}
              slug={node.slug}
              body={node.body.body}
              fluid={node.image.fluid}
              category={node.category}
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
  query($category: String!) {
    posts: allContentfulBlogPosts(
      sort: { order: DESC, fields: date }
      filter: { category: { in: [$category] } }
    ) {
      edges {
        node {
          id
          title
          slug
          date(formatString: "DD-M-YYYY")
          category
          author
          body: childContentfulBlogPostsBodyRichTextNode {
            json
            body
          }
          image {
            fluid {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
      totalCount
    }
  }
`

export default TagPosts
