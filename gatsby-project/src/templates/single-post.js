import React, { Component } from "react"
import { graphql, Link  } from "gatsby"
import Layout from '../components/layout'
import Sidebar from '../components/sidebar'
import {Row , Col, Card, CardTitle ,CardBody, CardSubtitle, Badge} from 'reactstrap'
import SEO from '../components/seo'
import {slugify} from '../utils/utilityFunctions'
import Img from 'gatsby-image'
import { faLinkedin , faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"
import { MDXProvider } from "@mdx-js/react"
import { FacebookProvider, Comments , Share } from 'react-facebook';


const baseUrl="https://eagrar.netlify.com/"
 
class SinglePost extends Component  {
  render(){
    const post = this.props.data.mdx.frontmatter;
    return(
    <div>
    <Layout pageName="Blog">
          <SEO title={post.title} />
        <div>  
        <Row style={{margin:"auto" ,padding:"1vh"}}>
          <Col md="8" >
              <Card style={{padding:"2vh"}}>
                <CardTitle style={{fontWeight:"bold" ,fontSize:"4vh" ,lineHeight:"1"}}>{post.title}</CardTitle>
                <Img className="card-image-top" fluid={post.image.childImageSharp.fluid} sx={{height:"54vh"}}></Img>
                <CardBody style={{paddingLeft:"0"}}>
                  <CardSubtitle>
                    <span className="text-info">{post.date}</span> by{''}
                    <span className="text-info"> {post.author}</span>
                  </CardSubtitle>
                  <p>
                    <MDXProvider >
                      <MDXRenderer>{this.props.data.mdx.body}</MDXRenderer>
                    </MDXProvider>
                  </p>
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
              <h3 className="text-center">Share this post</h3>   
              <div className="text-center social-share-link" >
                    
                      <ul  >
                        <a href={'https://www.facebook.com/sharer/sharer.php?u=' + baseUrl + this.props.data.mdx.fields.slug } 
                            target="_blank"   
                            rel="noopener noreferrer"
                            style={{marginRight:"10vh"}}
                            >
                            <i class=""></i>
                            <FontAwesomeIcon icon={faFacebookF} size="2x"  />

                        </a>
                      
                        <a href={'https://twitter.com/share?url=' + baseUrl + this.props.data.mdx.fields.slug } 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{marginRight:"10vh"}}
                            >
                            <i class=""></i>
                            <FontAwesomeIcon icon={faTwitter} size="2x"  />

                        </a>
                      
                        <a href={'https://www.linkedin.com/shareArtcle?url=' + baseUrl + this.props.data.mdx.fields.slug } target="_blank" rel="noopener noreferrer">
                            <i class=""></i>
                            <FontAwesomeIcon icon={faLinkedin} size="2x"  />

                        </a>
                      </ul>
              </div>
             
              
          </Col>
          <Col md="4">                 
            <Sidebar/>
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
query blogPostBySlug($slug: String!)
{
  mdx(fields: {slug: {eq: $slug}}) {
    id
    body
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