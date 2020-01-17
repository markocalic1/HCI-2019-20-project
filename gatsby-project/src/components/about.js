import React from "react"
import Slideshow from "../components/slideshow"
const AboutSection = ({ children }) => {


  return (
    
      <div Tag="section" className="container mt-4 pb-5">
           <div className="row">
                <div className=" col-md-12" style={{alignItems:"center"}}>
                   
                    <Slideshow></Slideshow>
                </div>
            </div>
      </div>
    
  )
}


export default AboutSection


