import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {slugify} from '../utils/utilityFunctions'
import {Badge , Button} from 'reactstrap'

const tagsPage = ({pageContext}) => {
    const {tags , tagPostCounts} = pageContext;
    return(
        <Layout>
            <SEO title="Tags" keywords="tags"/>
            <ul>
                {tags.map(tag =>(
                    <li key={tag} style={{marginBottom:"10px"}}>
                        <Button color="primary" href={`/tag/${slugify(tag)}`}>
                            {tag} <Badge color="light"></Badge>{tagPostCounts[tag]}

                        </Button>
                    </li>
                ))}
            </ul>
        </Layout>
    )

}

export default tagsPage