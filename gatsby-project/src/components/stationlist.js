/** @jsx jsx */
import { jsx } from "theme-ui"

import { graphql, useStaticQuery } from 'gatsby'
import {
  Card,  CardBody, CardSubtitle,CardTitle
} from 'reactstrap';


const StationList = () => {
    const data = useStaticQuery(graphql`
    {
      allMdx(filter: {fileAbsolutePath: {regex: "//content/stations//"}, frontmatter: {title: {ne: "true"}}}) {
        stations: edges {
          station: node {
            id
            frontmatter {
              location
              last_update
              temperature
              humidity
              air_pressure
              
            }
          }
        }
      }
      
    }
  `)

  const {
    allMdx: { stations },
    
  } = data
      
  return(
  <div sx={{   textAlign:"-webkit-center",
  }}>
    
   {stations &&
        stations.map(({ station }) => {
          return (
            <div key={station.id}
            sx={{
              display:"inline-flex",
              padding:4,
                        }}>
            <Card sx={{
                backgroundColor:"#ffffff87",
                
            }} className="text-left p-2">
              
                <CardTitle className="text-uppercase  h4">{station.frontmatter.location}</CardTitle>
                <CardSubtitle style={{fontSize:"3rem" , paddingBottom:"0"}}>{station.frontmatter.temperature}°C</CardSubtitle>
                <CardSubtitle style={{color:"#525252" , fontWeight:"400", paddingBottom:"0"}}>Humidity: {station.frontmatter.humidity}%</CardSubtitle>
                <CardSubtitle style={{color:"#525252" , fontWeight:"400",  }}>Air pressure: {station.frontmatter.air_pressure} hPa</CardSubtitle>

                <CardSubtitle style={{color:"#525252" , fontWeight:"400" , paddingTop:"15px" ,paddingBottom:"0px" , fontSize:"0.8rem"}}>Last update :{station.frontmatter.last_update}</CardSubtitle>


            
              <CardBody className="text-center">
              

              </CardBody>
            </Card>
          </div>
            
          )
        })}
  </div>
  )
    }

export default StationList