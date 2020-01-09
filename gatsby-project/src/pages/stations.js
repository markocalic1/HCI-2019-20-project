/** @jsx jsx */

import { jsx} from "theme-ui"

import Layout from "../components/layout"
import SEO from "../components/seo"
import StationList from "../components/stationlist"
import FooterContainer from "../components/footer"

const StationPage = ({ data }) => {

 
    return (
    <div sx={{display:"flex",
            flexDirection:"column"
              
        }} >
        <Layout>
         <SEO title="Stations" />
        </Layout>
        <StationList></StationList>
        <FooterContainer></FooterContainer>
       
    </div>
  )
}



export default StationPage