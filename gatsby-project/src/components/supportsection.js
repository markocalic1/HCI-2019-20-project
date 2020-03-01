import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Img from "gatsby-image"
import "./style/features.css"

const SupportSection = ({ children }) => {
  const { allFile } = useStaticQuery(
    graphql`
      {
        allFile(
          sort: { fields: name, order: DESC }
          filter: { relativeDirectory: { eq: "supporters" } }
        ) {
          edges {
            node {
              id
              name
              childImageSharp {
                fixed(height: 80) {
                  ...GatsbyImageSharpFixed_tracedSVG
                }
              }
            }
          }
        }
      }
    `
  )

  const items = allFile.edges
  console.log(items)

  return (
    <div className="section py-3 " style={{ backgroundColor: "#343a40" }}>
      <div
        className="section-center mx-5"
        style={{ borderBottom: "1px solid white" }}
      >
        <div
          className="text-center "
          style={{ color: "white", paddingTop: "25px", fontSize: "1.5rem" }}
        >
          Supported by:
        </div>
        <div
          className="supporters-section column"
          style={{ justifyContent: "center", padding: "8vh", display: "flex" }}
        >
          {items.map((node, index) => {
            const links = [
              "http://www.szst.unist.hr/",
              "http://www.scst.unist.hr/",
            ]
            return (
              <div
                className="image-frame"
                style={{ height: "80px", padding: "10px" }}
              >
                <a
                  href={links[index]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Img fixed={node.node.childImageSharp.fixed}></Img>
                </a>
              </div>
            )
          })}
          {/* <div className="image-frame" style={{ height: "80px" }}>
            <Link to="http://www.scst.unist.hr/">
              <img src={scstLogo}></img>
            </Link>
          </div>
          <div className="image-frame" style={{ height: "80px" }}>
            <Link to="http://www.scst.unist.hr/">
              <img src={szstlogo}></img>
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default SupportSection
