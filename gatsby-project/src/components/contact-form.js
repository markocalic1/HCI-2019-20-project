// Customize this 'myform.js' script and add it to your JS bundle.
// Then import it with 'import MyForm from "./myform.js"'.
// Finally, add a <MyForm/> element whereever you wish to display the form.

import React from "react"
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Alert,
  Card,
  CardBody,
  CardTitle,
} from "reactstrap"
import {
  faEnvelope,
  faPhone,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import blackLogo from "../images/logo_black.png"

export default class MyForm extends React.Component {
  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
    this.state = {
      status: "",
    }
  }

  render() {
    const { status } = this.state
    return (
      <div
        className="row"
        style={{ padding: "8% 2vh", minHeight: "79vh", margin: "auto" }}
      >
        <div className="col-md-6 pb-2">
          <Card style={{ minHeight: "400px" }}>
            <CardBody>
              <CardTitle style={{ fontSize: "1.75rem" }}>Contact us</CardTitle>
              <Form
                onSubmit={this.submitForm}
                action="https://formspree.io/xayoznkg"
                method="POST"
              >
                <FormGroup>
                  <Label>Email:</Label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="example@example.com"
                  />
                  <Label>Message:</Label>
                  <Input
                    type="textarea"
                    name="message"
                    placeholder="Your messsage..."
                    style={{ marginBottom: "5px" }}
                  />
                  {status === "SUCCESS" ? (
                    <Alert
                      color="success"
                      style={{ width: "8rem", marginLeft: "auto" }}
                    >
                      Thanks!{" "}
                    </Alert>
                  ) : (
                    <Button
                      style={{ backgroundColor: "#167d26", marginTop: "5px" }}
                    >
                      Submit
                    </Button>
                  )}
                  {status === "ERROR" && (
                    <Alert color="danger">Ooops! There was an error.</Alert>
                  )}
                </FormGroup>
              </Form>
            </CardBody>
          </Card>
        </div>
        <div className="col-md-6 ">
          <Card style={{ minHeight: "400px" }}>
            <img
              src={blackLogo}
              height="120"
              width="120"
              className="m-auto"
              alt="blackLogo"
            />
            <div style={{ margin: "auto" }}>
              <CardTitle style={{ margin: "auto", marginBottom: "1rem" }}>
                <FontAwesomeIcon icon={faEnvelope} color="#167d26" />{" "}
                <a
                  style={{ color: "#157d26" }}
                  href="mailto: eagrar@eagrar.eu "
                >
                  eagrar@eagrar.eu
                </a>
              </CardTitle>
              <CardTitle style={{ margin: "auto", marginBottom: "1rem" }}>
                <FontAwesomeIcon icon={faPhone} color="#167d26" />{" "}
                <a style={{ color: "#157d26" }} href="tel:+385976715757">
                  +385976715757
                </a>
              </CardTitle>
              <CardTitle style={{ margin: "auto", marginBottom: "1rem" }}>
                <FontAwesomeIcon icon={faMapMarkedAlt} color="#167d26" /> 21000
                Split
              </CardTitle>
            </div>
          </Card>
        </div>
      </div>
    )
  }

  submitForm(ev) {
    ev.preventDefault()
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader("Accept", "application/json")
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        this.setState({ status: "SUCCESS" })
      } else {
        this.setState({ status: "ERROR" })
      }
    }
    xhr.send(data)
  }
}
