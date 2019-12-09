/** @jsx jsx */
import { jsx } from "theme-ui"
import { useStaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"
import  { useState } from 'react';

const  SlideShow = () => {
  const [index, setIndex] = useState(0)
  const { allFile } = useStaticQuery(
    graphql`
      query {
        allFile(
          sort: { fields: name, order: DESC }
          filter: { relativeDirectory: { eq: "slideshow" } }
        ) {
          edges {
            node {
              id
              name
              childImageSharp {
                fluid(maxWidth: 400 ) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    `
  )
  //Minus 1 for array offset from 0
  const length = allFile.edges.length - 1
  const handleNext = () =>
    index === length ? setIndex(0) : setIndex(index + 1)
  const handlePrevious = () =>
    index === 0 ? setIndex(length) : setIndex(index - 1)
  const { node } = allFile.edges[index]
  return (
    <div>
      <div>
        <Img
          fluid={node.childImageSharp.fluid}
          key={node.id}
          alt={node.name.replace(/-/g, ' ').substring(2)}
        />
      </div>
      <div className="mx-auto">
        <button onClick={() => handlePrevious()}>Previous</button>
        <button onClick={() => handleNext()}>Next</button>
      </div>
    </div>
  )
}
export default SlideShow



