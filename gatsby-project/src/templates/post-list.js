import React from "react"
import Layout from "../components/layout"
import Post from "../components/post"
import SEO from "../components/seo"
import Sidebar from "../components/sidebar"
import { Row, Col } from "reactstrap"
import { graphql } from "gatsby"
import PaginationLinks from "../components/paginationLinks"

const postList = props => {
  const posts = props.data.posts
  const { currentPage, numberOfPages } = props.pageContext
  return (
    <Layout pageName="Blog">
      <SEO title="Blog" />

      <Row style={{ margin: "auto", padding: "2vh", paddingTop: "3vh" }}>
        <Col md="8">
          <div>
            {posts.edges.map(({ node }) => (
              <Post
                key={node.id}
                title={node.title}
                author={node.author}
                date={node.date}
                slug={node.slug}
                body={node.body.json}
                fluid={node.image.fluid}
                category={node.category}
              />
            ))}
            <PaginationLinks
              currentPage={currentPage}
              numberOfPages={numberOfPages}
            ></PaginationLinks>
          </div>
        </Col>
        <Col md="4">
          <Sidebar />
        </Col>
      </Row>
    </Layout>
  )
}

export const postListQuery = graphql`
  query postListQuery($skip: Int!, $limit: Int!) {
    posts: allContentfulBlogPosts(
      sort: { order: DESC, fields: date }
      limit: $limit
      skip: $skip
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

export default postList
