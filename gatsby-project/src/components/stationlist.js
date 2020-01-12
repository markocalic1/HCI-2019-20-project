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
  <div sx={{    textAlign:"-webkit-center",
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
                backgroundColor:"lightGreen"
            }} className="text-left p-2">
              
                <CardTitle className="text-uppercase  h4">{station.frontmatter.location}</CardTitle>
                <CardSubtitle>Temperature :{station.frontmatter.temperature}</CardSubtitle>
                <CardSubtitle>Last update :{station.frontmatter.last_update}</CardSubtitle>


            
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