import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Img from "gatsby-image"
import "./style/features.css"

const Awards = ({ children }) => {
  const { allContentfulAwards } = useStaticQuery(
    graphql`
      {
        allContentfulAwards {
          nodes {
            awardSvg {
              file {
                fileName
                url
                contentType
              }
            }
          }
        }
      }
    `
  )

  const items = allContentfulAwards.nodes
  console.log(items)

  return (
    <div className="section py-3 mt-5" style={{ backgroundColor: "#343a40" }}>
      <div
        className="section-center mx-5 pb-3"
        style={{ borderBottom: "1px solid white" }}
      >
        <div
          className="text-center "
          style={{ color: "white", paddingTop: "25px", fontSize: "1.5rem" }}
        >
          Awards{" "}
        </div>
        <div
          className="awards-section row"
          style={{ justifyContent: "center", padding: "8vh", display: "flex" }}
        >
          {items.map(node => {
            return (
              <div
                className="image-frame col-sm-5 col-md-3 col-lg-2"
                style={{
                  height: "100px",
                  width: "100px",
                  margin: "20px",
                  marginBottom: "50px",
                }}
              >
                {console.log(node)}
                <img src={node.awardSvg.file.url} alt={node.alt} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Awards
