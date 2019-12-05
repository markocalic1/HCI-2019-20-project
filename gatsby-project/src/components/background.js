/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
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
        <div className={navbarStyles.overlay} sx={{height:"88vh"}}>
            <BackgroundImage
                Tag="section"
                className={className}
                fluid={imageData}
                backgroundColor={`#040e18`}
                >
                <StyledInnerWrapper sx={{fontSize:[2,3,4]}}>
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
    
    justify-content: center;

    height: 66vh;
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