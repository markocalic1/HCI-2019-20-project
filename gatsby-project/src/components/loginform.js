/** @jsx jsx */
import { jsx } from "theme-ui"

import React from 'react'
import { Button } from "reactstrap"
import { navigate } from "gatsby"
import { handleLogin, isLoggedIn } from "../utils/auth"
  
class LoginForm extends React.Component {
    state = {
      username: ``,
      password: ``,
    }
    handleUpdate = event => {
      this.setState({
        [event.target.name]: event.target.value,
      })
    }
    handleSubmit = event => {
      event.preventDefault()
      handleLogin(this.state)
    }
    render() {
      if (isLoggedIn()) {
        navigate(`//profile`)
      }

     return (
      <div sx={{ 
        textAlign:"-webkit-center",
        padding:4,
        
  }}>
        <h3>Log in for more information</h3>
        <hr></hr>
        <form
          method="post"
          onSubmit={event => {
            this.handleSubmit(event)
            navigate(`//profile`)
          }}
        >


  <div className="form-group">
  <label className="text-center" >
    <h6>Username</h6>
    <input type="text" name="username" id="username" onChange={this.handleUpdate}/>
  </label>
  </div>
 
  <div className="form-group">
  <label className="text-center">
    <h6>Password</h6>
    <input type="password" name="password" id="password" onChange={this.handleUpdate}/>
  </label>
  </div>

  <Button type="submit" color="success">Sign in</Button>{' '}
        </form>
     </div>
    )
  }
}
export default LoginForm