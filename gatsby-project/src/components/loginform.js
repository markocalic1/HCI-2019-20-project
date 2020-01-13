/** @jsx jsx */
import { jsx } from "theme-ui"

import React from 'react'
import { Button } from "reactstrap"
  
  const LoginForm = ({  }) => {
    

    return (
      <div sx={{ 
        textAlign:"-webkit-center",
        padding:4,
        
  }}>

<h3>Sign in for more information</h3>
<hr></hr>
       
<form method="post" action="#">

<div className="form-group">
  <label className="text-center" >
    <h6>Username</h6>
    <input type="text" name="username" id="username"/>
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
    <h6>Password</h6>
    <input type="password" name="password" id="password" />
  </label>
  </div>

 
  
  <Button type="submit" color="success">Sign in</Button>{' '}
</form>
      </div>  
    )
  }

  export default LoginForm