/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import React, { Component } from "react"
import { graphql, Link } from "gatsby"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  Card, CardImg, CardText, CardBody, CardFooter,
  CardTitle, CardSubtitle, Badge
} from 'reactstrap';
import Img from 'gatsby-image'
import {slugify} from '../utils/utilityFunctions'

const Post = ({ title ,author, date , path , body, fluid , tags  }) => {
    return (
    <Card sx={{marginBottom:"3vh"}}>
      <Link to={path}>
      <Img sx={{
        maxHeight:"40vh"
        }}
        className="card-image-top" fluid={fluid}/>
      </Link>
      <CardBody>
        <CardTitle><Link style={{textDecoration:"none" ,fontWeight:"bold", fontSize:[2,3,4]}} to={path}>{title}</Link></CardTitle>
        <CardSubtitle> 
        <span className="text-info">{date} by </span>
        <span className="text-info">{author}</span>

        </CardSubtitle>
        <CardText>{body}</CardText>
        <ul sx={{
          marginLeft:"0",
          padding:"0",
          display:"inline-flex",
          listStyle:"none"
        }}>
          {tags.map(tag => (
            <li>
              <Link to={`/tag/${slugify(tag)}`}>
                <Badge color="primary" sx={{
                  margin:"2px",
                  fontSize:"1.5vh"
                }}>{tag.toUpperCase()}</Badge>
              </Link>
            </li>
          ))}
        </ul>
        <Link to={path} className="btn btn-outline-primary float-right t">
          Read more ->
        </Link>
      </CardBody>
    </Card>   
      
    )
  }



export default Post

// export const postQuery = graphql`
//   query($id: String!) {
//     wordpressPost(id: { eq: $id }) {
//       title
//       content
//     }
//     site {
//       siteMetadata {
//         title
        
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
//   }
// `