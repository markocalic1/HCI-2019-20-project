/** @jsx jsx */
import { jsx } from "theme-ui"
import {Card , CardTitle, CardBody ,Form, FormGroup , Input, Button} from 'reactstrap'
import { StaticQuery , Link } from "gatsby"
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import React from "react"
import {slugify} from '../utils/utilityFunctions'


const Sidebar = () => (
    
    <>
    <div>
        <Card className="mb-2">
            <CardBody>
                <CardTitle d className="text-center text-uppercase mb-3">
                    Newsletter
                </CardTitle>
                <tagsPage></tagsPage>
                <Form className="text-center">
                    <FormGroup>
                        <Input type="email" name="email"  placeholder="Your email adress.."/>
                    </FormGroup>
                    <Button className="btn btn-success text-uppercase">
                        Subscribe
                    </Button>

                </Form>
            </CardBody>
        </Card>

        <Card className="mb-2">
            <CardBody>
                <CardTitle className="text-canter text-uppercase ">
                    Tags
                </CardTitle>
                <StaticQuery query={SidebarQuery} render={(data) => (
                    <div style={{display:"inline-grid"}}>
                        {data.allMdx.tagsRow.map(tag =>(
                        <Link style={{textDecoration:"none" , marginX:"10px"}} to={`/tag/${slugify(tag)}`} key={tag}>
                            {tag}
                        </Link>
                        ))

                        }
                    </div>
                )}
                
                />
            </CardBody>
        </Card>

        <Card className="mb-2">
            <CardBody>
                <CardTitle className="text-canter text-uppercase ">
                    Advertisment
                </CardTitle>

                <img src="https://via.placeholder.com/320x200" alt="Advert" sx={{width:"100%"}}/>
            </CardBody>
        </Card>
        <Card className="mb-2">
            <CardBody>
                <CardTitle className="text-canter text-uppercase ">
                    Recent Post:
                </CardTitle>
                <StaticQuery query={SidebarQuery} render={(data) => (
                    <div>
                        {data.allMdx.posts.map(({post}) => (
                            <Card key={post.id} className="mb-1">
                                <Link to={post.fields.slug}>
                                    <Img className="card-image-top" fluid={post.frontmatter.image.childImageSharp.fluid}/>
                                </Link>
                                <CardBody style={{padding:"1px"}}>
                                    <CardTitle sx={{padding:"0.30rem"}}>
                                        <Link style={{textDecoration:"none",
                                                     fontWeight:"bold"  , 
                                                     fontSize:[1 , 2 ,3]                                                
                                                    
                                                }}
                                              to={post.fields.slug} >
                                            {post.frontmatter.title}
                                        </Link>
                                    </CardTitle>
                                </CardBody>
                            </Card>
                        ))}
                    </div>
                )}
                
                />
            </CardBody>
        </Card>
    </div>
    </>
)

const SidebarQuery = graphql`
  {
    allMdx(filter: {fileAbsolutePath: {regex: "//content/posts//"}, frontmatter: {title: {ne: "true"}}}, sort: {fields: frontmatter___date, order: DESC}, limit: 3) {
      posts: edges {
        post: node {
          id
          frontmatter {
            title
            
            image {
              childImageSharp {
                fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid_withWebp

                }
              }
            }
          }
        fields{
            slug
        }
        }
      }
      tagsRow:distinct(field: frontmatter___tags)
    }
  }
`


export default Sidebar