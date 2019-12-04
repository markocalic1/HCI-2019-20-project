import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import navbarStyles from "./navbar.module.css"

import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "background.webp" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <div className={navbarStyles.overlay}>
            <BackgroundImage
                Tag="section"
                className={className}
                fluid={imageData}
                backgroundColor={`#040e18`}
                >
                <StyledInnerWrapper>
                    <h2>eAgrar</h2>
                    <p>New way of agriculture</p>
                    <p>Make the best of your efforts</p>

                </StyledInnerWrapper>
                <div className={navbarStyles.thimLineEffect}>
                    <div className={navbarStyles.imageCut}></div>
                    <div className={navbarStyles.imageCut}></div>
                </div>
            </BackgroundImage>
        </div>
      )
    }}
  />
)

const StyledInnerWrapper = styled.div`
    zoom:130%;
    padding-top:20%;
    color:white;
    display: flex;
  flex-direction: column;
  align-items: center;
`
const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
  height: -webkit-fill-available;
`

export default StyledBackgroundSection