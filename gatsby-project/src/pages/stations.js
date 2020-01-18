/** @jsx jsx */

import { jsx} from "theme-ui"

import Layout from "../components/layout"
import SEO from "../components/seo"
import StationList from "../components/stationlist"
import BackgroundImage from 'gatsby-background-image'
import {graphql} from 'gatsby'

const StationPage = ({ data }) => {

 
    return (
    <div sx={{display:"flex",
            flexDirection:"column",
              
        }} >
        <Layout pageName="Stations">
         <SEO title="Stations" />

         <BackgroundImage
            Tag="div"
            sx={{width:"100%" , height:"85vh", backgroundPosition:"bottom center" , backgroundRepeat:"repeat-y" , backgroundSize:"cover" ,  minHeight:"100%" ,width:"100%"}}
            fluid={data.file.childImageSharp.fluid}          
          >
                     <StationList></StationList>

          </BackgroundImage>

        </Layout>
       
    </div>
  )
}

export const query = graphql`
{
  file(relativePath: {eq: "images/stationbg.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
}
`

export default StationPage