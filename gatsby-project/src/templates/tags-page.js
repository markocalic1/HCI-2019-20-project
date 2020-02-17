import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { slugify } from "../utils/utilityFunctions"
import { Badge, Button, Row, Col } from "reactstrap"
import Sidebar from "../components/sidebar"
import { Link } from "gatsby"

const tagsPage = ({ pageContext }) => {
  const { categories, categoryPostCounts } = pageContext
  return (
    <Layout pageName="Blog">
      <SEO title="Tags" keywords="tags" />
      <Row style={{ margin: "auto", padding: "1vh" }}>
        <Col md="8">
          <div style={{ margin: "5px" }}>
            <ul style={{ display: "inline-grid" }}>
              {categories.map(category => (
                <Link key={category} style={{ marginBottom: "10px" }}>
                  <Button color="primary" href={`/tag/${slugify(category)}`}>
                    {category} <Badge color="light"></Badge>
                    {categoryPostCounts[category]}
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
