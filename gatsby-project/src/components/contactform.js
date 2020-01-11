/** @jsx jsx */
import { jsx } from "theme-ui"

import React from 'react'
import { Button } from "reactstrap"

  
  const ContactForm = ({  }) => {
    

    return (
      <div sx={{ 
        textAlign:"-webkit-center",
        padding:4,
        
  }}>

<h3>Please, contact us if you have any questions</h3>
<hr></hr>
       
<form method="post" action="#">

<div className="form-group">
  <label className="text-center" >
    <h6>Name</h6>
    <input type="text" name="name" id="name"/>
  </label>
  </div>
 
  <div className="form-group">
  <label className="text-center">
    <h6>Email</h6>
    <input type="email" name="email" id="email" />
  </label>
  </div>

  <div className="form-group">
  <label className="text-center">
    <h6>Subject</h6>
    <input type="text" name="subject" id="subject" />
  </label>
  </div>
  
  <div className="form-group">
  <label className="text-center">
    <h6>Message</h6>
    <textarea name="message" id="message" rows="5" />
  </label>
  </div>
  
  <Button type="submit" color="success">Send</Button>{' '}
  <Button type="reset" color="secondary">Clear</Button>
</form>

<hr></hr>

<h4>Or you can find us on social networks...</h4>
      </div>  
    )
  }

  export default ContactForm