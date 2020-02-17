/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, StaticQuery } from "gatsby"
import Post from "../components/post"
import { Row, Col } from "reactstrap"
import Sidebar from "../components/sidebar"
import React from "react"
import PaginationLinks from "../components/paginationLinks"

const blogQuery = graphql`
  {
    posts: allContentfulBlogPosts(
      sort: { fields: date, order: DESC }
      limit: 3
    ) {
      edges {
        post: node {
          id
          title
          slug
          date(formatString: "DD-M-YYYY")
          category
          author
          body: childContentfulBlogPostsBodyRichTextNode {
            body
            json
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
const BlogPage = () => {
  const postsPerPage = 3
  let numberOfPages

  return (
    <>
      <div>
        <Layout pageName="Blog">
          <SEO title="Blog" />

          <Row style={{ margin: "auto", padding: "2vh", paddingTop: "3vh" }}>
            <Col md="8">
              <div sx={{}}>
                <StaticQuery
                  query={blogQuery}
                  render={data => {
                    numberOfPages = Math.ceil(
                      data.posts.totalCount / postsPerPage
                    )
                    return (
                      <div>
                        {data.posts.edges.map(({ post }) => (
                          <Post
                            key={post.id}
                            title={post.title}
                            author={post.author}
                            date={post.date}
                            slug={post.slug}
                            body={post.body.json}
                            fluid={post.image.fluid}
                            category={post.category}
                          />
                        ))}
                        <PaginationLinks
                          currentPage={1}
                          numberOfPages={numberOfPages}
                        ></PaginationLinks>
                      </div>
                    )
                  }}
                />
              </div>
            </Col>
            <Col md="4">
              <Sidebar />
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
