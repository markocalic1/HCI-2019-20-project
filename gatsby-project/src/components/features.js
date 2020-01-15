import React from "react"
import { Row , Card , CardTitle , CardSubtitle ,CardText} from 'reactstrap'
import {Img} from 'gatsby-image' 
import { faRocket , faCloudDownloadAlt, faBell, faPowerOff , faMobileAlt , faMedkit} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import  './style/features.css'
const FeaturesSection = ({ children }) => {

    function hoverIcon(e) {
        e.target.style.zoom = '1.05';
      }

  return (
    <div >
        <Row style={{display:"inline-flex" , justifyContent:"center " ,width:"100%" , margin:"0" }}>
            <Card lg="6" className="icon-space"  >
                    <CardTitle className="icon">
                        <FontAwesomeIcon icon={faPowerOff} size="4x" color="#17a2b8" />                    
                    </CardTitle>
                    <CardSubtitle  className="card-subtitle" >Remote Control</CardSubtitle>
                <CardText style={{lineHeight:"1" , color:"grey"}}>
                    <ul>
                        Without going to the parcel
                    </ul>  
                    <ul>
                        From any location
                    </ul>                  
                </CardText>
            </Card>

            <Card lg="6" className="icon-space"  >
                    <CardTitle className="icon">
                        <FontAwesomeIcon icon={faRocket} size="4x" color="#17a2b8" />                    
                    </CardTitle>
                    <CardSubtitle className="card-subtitle" >Fast and efficient</CardSubtitle>
                <CardText style={{lineHeight:"1" , color:"grey"}}>
                    <ul>
                            Fully optimized application
                    </ul>  
                    <ul>
                            Easy to use     
                    </ul>                  
                </CardText>
            </Card>

            <Card sm="4" className="icon-space"  >
                    <CardTitle className="icon">
                        <FontAwesomeIcon icon={faBell} size="4x" color="#17a2b8" />                    
                    </CardTitle>
                    <CardSubtitle className="card-subtitle"  >Notifications warning</CardSubtitle>
                <CardText style={{color:"grey" }}>
                    <ul>
                    notifies users of the possible appearance of the disease (bumps, ashtrays, feather spores)                 
                    </ul>  
                                      
                </CardText>
            </Card>
            
            <Card sm="4" className="icon-space"  >
                    <CardTitle className="icon">
                        <FontAwesomeIcon icon={faMobileAlt} size="4x" color="#17a2b8" />                    
                    </CardTitle>
                    <CardSubtitle className="card-subtitle"  >Responsive design</CardSubtitle>
                <CardText style={{color:"grey" }}>
                    <ul>
                    View your information on your laptop, tablet or smartphone.                 
                    </ul>  
                                      
                </CardText>
            </Card>

            <Card  className="icon-space"  sm="4">
                    <CardTitle className="icon">
                        <FontAwesomeIcon icon={faCloudDownloadAlt} size="4x" color="#17a2b8" />                    
                    </CardTitle>
                    <CardSubtitle className="card-subtitle"  >Availability of data</CardSubtitle>
                <CardText style={{color:"grey" }}>
                    <ul>
                    dashboard with icons, charts, and tables               
                    </ul>  
                                      
                </CardText>
            </Card>

            <Card  className="icon-space"  md="4">
                    <CardTitle className="icon">
                        <FontAwesomeIcon icon={faMedkit} size="4x" color="#17a2b8" />                    
                    </CardTitle>
                    <CardSubtitle className="card-subtitle"  >Help</CardSubtitle>
                <CardText style={{color:"grey" }}>
                    <ul>
                    earn savings in the use of chemicals, fuels and water         
                    </ul>  
                                      
                </CardText>
            </Card>

            

        </Row>
    </div>
      
    
  )
}



export default FeaturesSection
