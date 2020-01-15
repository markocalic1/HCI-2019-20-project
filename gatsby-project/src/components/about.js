import React from "react"
import Slideshow from "../components/slideshow"
const AboutSection = ({ children }) => {


  return (
    
      <div Tag="section" className="container mt-4">
           <div className="row">
                <div className="col-xs-12 col-md-10 col-md-offset-1 mx-auto">
                   
                    <Slideshow></Slideshow>
                </div>
            </div>
      </div>
    
  )
}


export default AboutSection


