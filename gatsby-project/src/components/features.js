import React from "react"
import { Row , Card , CardTitle , CardSubtitle ,CardText} from 'reactstrap'
import {Img} from 'gatsby-image' 
import { faRocket , faCloudDownloadAlt, faBell, faWifi , faMobileAlt , faMedkit} from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import  './style/features.css'

const FeaturesSection = ({ children }) => {

    function hoverIcon(e) {
        e.target.style.zoom = '1.05';
      }

  return (
    <div >
        <Row style={{display:"inline-flex" , justifyContent:"center " ,width:"100%" , margin:"0" }}>
            <Card lg="6" className="icon-space col-md-3"  >
                    <CardTitle className="icon">
                        <FontAwesomeIcon icon={faWifi} size="2x" color="#167d26" />                    
                    </CardTitle>
                    <CardSubtitle  className="card-subtitle" >Remote Control</CardSubtitle>
                <CardText style={{ fontSize:"2vh", color:"grey"}}>
                    <ul>
                        Without going to the parcel
                    
                        from any location
                    </ul>                  
                </CardText>
            </Card>

            <Card lg="6" className="icon-space col-md-3"  >
                    <CardTitle className="icon">
                        <FontAwesomeIcon icon={faRocket} size="2x" color="#167d26" />                    
                    </CardTitle>
                    <CardSubtitle className="card-subtitle" >Fast and efficient</CardSubtitle>
                <CardText style={{fontSize:"2vh", color:"grey"}}>
                    <ul>
                            Fully optimized application
                    
                            Easy to use     
                    </ul>                  
                </CardText>
            </Card>

            <Card sm="4" className="icon-space col-md-3"  >
                    <CardTitle className="icon">
                        <FontAwesomeIcon icon={faBell} size="2x" color="#167d26" />                    
                    </CardTitle>
                    <CardSubtitle className="card-subtitle"  >Notifications warning</CardSubtitle>
                <CardText style={{fontSize:"2vh",color:"grey" }}>
                    <ul>
                    Notifies users of the possible appearance of the disease
                    </ul>  
                                      
                </CardText>
            </Card>
            
            <Card sm="4" className="icon-space col-md-3"  >
                    <CardTitle className="icon">
                        <FontAwesomeIcon icon={faMobileAlt} size="2x" color="#167d26" />                    
                    </CardTitle>
                    <CardSubtitle className="card-subtitle"  >Responsive design</CardSubtitle>
                <CardText style={{fontSize:"2vh",color:"grey" }}>
                    <ul>
                    View your information on your laptop, tablet or smartphone.                 
                    </ul>  
                                      
                </CardText>
            </Card>

            <Card  className="icon-space col-md-3"  sm="4">
                    <CardTitle className="icon">
                        <FontAwesomeIcon icon={faCloudDownloadAlt} size="2x" color="#167d26" />                    
                    </CardTitle>
                    <CardSubtitle className="card-subtitle"  >Availability of data</CardSubtitle>
                <CardText style={{fontSize:"2vh",color:"grey" }}>
                    <ul>
                    Dashboard with icons, charts, and tables               
                    </ul>  
                                      
                </CardText>
            </Card>

            <Card  className="icon-space col-md-3"  md="4">
                    <CardTitle className="icon">
                        <FontAwesomeIcon icon={faMedkit} size="2x" color="#167d26" />                    
                    </CardTitle>
                    <CardSubtitle className="card-subtitle"  >Help</CardSubtitle>
                <CardText style={{fontSize:"2vh",color:"grey" }}>
                    <ul>
                    Earn savings in the use of chemicals, fuels and water         
                    </ul>  
                                      
                </CardText>
            </Card>

            

        </Row>
    </div>
      
    
  )
}



export default FeaturesSection
