/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import navbarStyles from "./style/navbar.module.css"

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
        <div className={navbarStyles.overlay} sx={{height:"50vh"}}>
            <BackgroundImage
                Tag="section"
                className={className}
                fluid={imageData}
                backgroundColor={`#040e18`}
                >
                <StyledInnerWrapper sx={{fontSize:[1,2,3]}}>
                    <p style={{fontSize:"5rem"}}>eAgrar</p>
                    <p>New way of agriculture</p>

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

    height: 40vh;
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