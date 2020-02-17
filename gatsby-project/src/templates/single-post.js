import React, { Component } from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Sidebar from "../components/sidebar"
import {
  Row,
  Col,
  Card,
  CardTitle,
  CardBody,
  CardSubtitle,
  Badge,
} from "reactstrap"
import SEO from "../components/seo"
import { slugify } from "../utils/utilityFunctions"
import Img from "gatsby-image"
import {
  faLinkedin,
  faTwitter,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const baseUrl = "https://eagrar.netlify.com/"

class SinglePost extends Component {
  render() {
    const post = this.props.data.post
    return (
      <div>
        <Layout pageName="Blog">
          <SEO title={post.title} />
          <div>
            <Row style={{ margin: "auto", padding: "1vh" }}>
              <Col md="8">
                <Card style={{ padding: "2vh" }}>
                  <CardTitle
                    style={{
                      fontWeight: "bold",
                      fontSize: "2.5rem",
                      lineHeight: "1",
                    }}
                  >
                    {post.title}
                  </CardTitle>
                  <Img
                    className="card-image-top"
                    fluid={post.image.fluid}
                    sx={{ height: "45vh" }}
                  ></Img>
                  <CardBody style={{ paddingLeft: "0" }}>
                    <CardSubtitle style={{ color: "#47ad57" }}>
                      <span className="text-info">{post.date}</span> by{""}
                      <span className="text-info"> {post.author}</span>
                    </CardSubtitle>
                    <div>{documentToReactComponents(post.body.json)}</div>
                    <ul className="post-tags" style={{ marginLeft: "0" }}>
                      <Link
                        to={`/category/${slugify(post.category)}`}
                        style={{ padding: "2px" }}
                      >
                        <Badge
                          color="primary"
                          sx={{
                            margin: "auto",
                            fontSize: "1.5vh",
                          }}
                        >
                          {post.category}
                        </Badge>
                      </Link>
                    </ul>
                  </CardBody>
                </Card>
                <h3 className="text-center">Share this post</h3>
                <div className="text-center social-share-link">
                  <ul>
                    <a
                      href={
                        "https://www.facebook.com/sharer/sharer.php?u=" +
                        baseUrl +
                        post.slug
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ marginRight: "10vh" }}
                    >
                      <i class=""></i>
                      <FontAwesomeIcon icon={faFacebookF} size="2x" />
                    </a>

                    <a
                      href={
                        "https://twitter.com/share?url=" + baseUrl + post.slug
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ marginRight: "10vh" }}
                    >
                      <i class=""></i>
                      <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </a>

                    <a
                      href={
                        "https://www.linkedin.com/shareArtcle?url=" +
                        baseUrl +
                        post.slug
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i class=""></i>
                      <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                  </ul>
                </div>
              </Col>
              <Col md="4">
                <Sidebar />
              </Col>
            </Row>
          </div>
        </Layout>
      </div>
    )
  }
}

export default SinglePost

export const postQuery = graphql`
  query blogPostBySlug($slug: String!) {
    post: contentfulBlogPosts(slug: { eq: $slug }) {
      id
      body {
        json
      }
      slug
      title
      date(formatString: "DD-M-YYYY")
      category
      author
      image {
        fluid(quality: 90) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`
