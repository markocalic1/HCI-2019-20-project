import React, { Component } from "react"
import { graphql, Link  } from "gatsby"
import Layout from '../components/layout'
import Sidebar from '../components/sidebar'
import FooterContainer from '../components/footer'
import {Row , Col, Card, CardTitle ,CardBody, CardSubtitle, Badge} from 'reactstrap'
import SEO from '../components/seo'
import {slugify} from '../utils/utilityFunctions'
import Img from 'gatsby-image'

 
class SinglePost extends Component  {
  render(){
    const post = this.props.data.mdx.frontmatter
    return(
    <div>
      <Layout>
          <SEO title={post.title} />
          
      </Layout>
      <Row style={{margin:"auto" ,padding:"1vh"}}>
        <Col md="8" >
            <Card style={{padding:"2vh"}}>
              <CardTitle><h2>{post.title}</h2></CardTitle>
              <Img className="card-image-top" fluid={post.image.childImageSharp.fluid}></Img>
              <CardBody style={{paddingLeft:"0"}}>
                <CardSubtitle>
                  <span className="text-info">{post.date}</span> by{''}
                  <span className="text-info">{post.author}</span>
                </CardSubtitle>
                  <p>{this.props.data.mdx.excerpt}</p>
                <ul className="post-tags" style={{marginLeft:"0"}}>
                  {post.tags.map(tag => (
                    
                    <Link to={`/tag/${slugify(tag)}`} style={{padding:"2px"}}>
                    <Badge color="primary" sx={{
                      margin:"auto",
                      fontSize:"1.5vh"
                    }}>{tag}</Badge>                     
                    </Link>
                  
                  ))}

                </ul>
              </CardBody>
            </Card>     
        </Col>
        <Col md="4">                 
          <Sidebar/>
        </Col>
      </Row>
      <FooterContainer/>
    </div>
    )
  }
    
}

export default SinglePost

export const postQuery = graphql`
query blogPostBySlug($slug: String!)
{
  mdx(fields: {slug: {eq: $slug}}) {
    id
    excerpt
    frontmatter {
      title
      author
      date
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
  }
}

`