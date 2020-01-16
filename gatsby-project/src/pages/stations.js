/** @jsx jsx */

import { jsx} from "theme-ui"

import Layout from "../components/layout"
import SEO from "../components/seo"
import StationList from "../components/stationlist"

const StationPage = ({ data }) => {

 
    return (
    <div sx={{display:"flex",
            flexDirection:"column"
              
        }} >
        <Layout pageName="Stations">
         <SEO title="Stations" />
         <StationList></StationList>

        </Layout>
       
    </div>
  )
}



export default StationPage