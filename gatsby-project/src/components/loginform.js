import { jsx } from "theme-ui"

import React from 'react'
import { navigate } from "gatsby"
import { handleLogin, isLoggedIn } from "../utils/auth"
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  CardBody,
  CardTitle,
} from "reactstrap"

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
      <div
      className="row"
      style={{ padding: "5% 2vh", minHeight: "79vh", margin: "auto" }}
    >

      <div className="col-md-6 pb-2">

      <Card style={{ minHeight: "400px"}}>
      <CardBody>
      <CardTitle style={{ fontSize: "1.75rem" }}>Sign up</CardTitle>
      <Form
      method="post"
      onSubmit={event => {
        this.handleSubmit(event)
      }}
      >
      <FormGroup>
      <Label>First Name:</Label>
        <Input type="text" name="name" id="name" placeholder="Your First Name" required/>
    
      <Label>Last Name:</Label>
        <Input type="text" name="surname" id="surname" placeholder="Your Last Name" required/>
    
      <Label>Email:</Label>
      <Input type="email" name="email" id="email" placeholder="example@example.com" required/>
    
      <Label>Password:</Label>
      <Input type="password" name="password" id="password" placeholder="Your Password" required/>
    
      <Label>Repeat Password:</Label>
      <Input type="password" name="password-repeat" id="password" placeholder="Repeat Password" required/>
    
      <Button style={{ backgroundColor: "#167d26", marginTop: "5px" }} type="submit" color="success">Sign up</Button>{' '}
      </FormGroup>
            </Form>
            </CardBody>
            </Card>
         </div>
    
    
    
    <div className="col-md-6 pb-2">
    <Card style={{ minHeight: "400px" }}>
    <CardBody>
    <CardTitle style={{ fontSize: "1.75rem" }}>Sign in</CardTitle>
    
    <Form
      method="post"
      onSubmit={event => {
        this.handleSubmit(event)
      }}
    >
    
    
    <FormGroup>
    <Label>Email:</Label>
    <Input type="email" name="email" id="email" placeholder="example@example.com" required/>
    
    <Label>Password:</Label>
    <Input type="password" name="password" id="password" placeholder="Your Password" required/>
    
    <Button style={{ backgroundColor: "#167d26", marginTop: "5px" }} type="submit" color="success">Sign in</Button>{' '}
    <span class="psw">Forgot <a href="#">password?</a></span>
    </FormGroup>
    </Form>
    </CardBody>
    </Card>
    </div>
    
         </div>
        )
      }
    }

    export default LoginForm

