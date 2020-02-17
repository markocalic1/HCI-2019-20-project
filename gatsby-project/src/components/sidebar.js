/** @jsx jsx */
import { jsx } from "theme-ui"
import { Card, CardTitle, CardBody } from "reactstrap"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import { slugify } from "../utils/utilityFunctions"

const Sidebar = props => {
  const data = useStaticQuery(graphql`
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

        categories: distinct(field: category)
      }
    }
  `)

  const posts = data.posts.edges
  const categories = data.posts.categories

  return (
    <>
      <div>
        <Card className="mb-2">
          <CardBody>
            <CardTitle className="text-canter text-uppercase ">
              Filter by Category
            </CardTitle>

            <div style={{ display: "inline-grid" }}>
              {categories.map(category => (
                <Link
                  style={{
                    textDecoration: "none",
                    marginX: "10px",
                    color: "#167d26",
                  }}
                  to={`/category/${slugify(category)}`}
                  key={category}
                >
                  {category}
                </Link>
              ))}
            </div>
          </CardBody>
        </Card>

        <Card className="mb-2">
          <CardBody>
            <CardTitle className="text-canter text-uppercase ">
              Advertisement
            </CardTitle>

            <img
              src="https://via.placeholder.com/320x200"
              alt="Advert"
              sx={{ width: "100%" }}
            />
          </CardBody>
        </Card>
        <Card className="mb-2">
          <CardBody>
            <CardTitle className="text-canter text-uppercase ">
              Recent Posts:
            </CardTitle>

            <div>
              {posts.map(({ post }) => (
                <Card key={post.id} className="mb-1">
                  <Link to={post.slug}>
                    <Img className="card-image-top" fluid={post.image.fluid} />
                  </Link>
                  <CardBody style={{ padding: "1px" }}>
                    <CardTitle sx={{ padding: "0.30rem" }}>
                      <Link
                        style={{
                          textDecoration: "none",
                          fontWeight: "bold",
                          fontSize: "0.7rem",
                          color: "#167d26",
                        }}
                        to={post.slug}
                      >
                        {post.title}
                      </Link>
                    </CardTitle>
                  </CardBody>
                </Card>
              ))}
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  )
}

// export const SidebarQuery = graphql`{
//     allMdx(filter: {fileAbsolutePath: {regex: "//content/posts//"}, frontmatter: {title: {ne: "true"}}}, sort: {fields: frontmatter___date, order: DESC}, limit: 3) {
//       posts: edges {
//         post: node {
//           id
//           frontmatter {
//             title

//             image {
//               childImageSharp {
//                 fluid(maxWidth: 300) {
//                     ...GatsbyImageSharpFluid_withWebp

//                 }
//               }
//             }
//           }
//         fields{
//             slug
//         }
//         }
//       }
//       tagsRow:distinct(field: frontmatter___tags)
//     }
//   }
// `

export default Sidebar
