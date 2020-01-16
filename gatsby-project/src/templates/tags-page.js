import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {slugify} from '../utils/utilityFunctions'
import {Badge , Button , Row ,Col} from 'reactstrap'
import Sidebar from "../components/sidebar"
import { Link } from 'gatsby'

const tagsPage = ({pageContext}) => {
    const {tags , tagPostCounts} = pageContext;
    return(
        <Layout pageName="Blog">
            <SEO title="Tags" keywords="tags"/>
            <Row style={{margin:"auto" ,padding:"1vh"}}>
                <Col md="8">
                    <div style={{margin:"5px" }}>
                        <ul style={{display:"inline-grid"}}>
                            {tags.map(tag =>(
                                <Link key={tag} style={{marginBottom:"10px"}}>
                                    <Button color="primary" href={`/tag/${slugify(tag)}`}>
                                        {tag} <Badge color="light"></Badge>{tagPostCounts[tag]}

                                    </Button>
                                </Link>
                            ))}
                       </ul>
                    </div>
                </Col>
                <Col md="4">
                    <Sidebar></Sidebar>
                </Col>
            </Row>
        </Layout>
    )

}

export default tagsPage