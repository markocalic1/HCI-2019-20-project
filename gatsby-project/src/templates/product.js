/** @jsx jsx */
import React, { useState } from "react"
import { jsx } from "theme-ui"
import {
  Card,
  CardBody,
  CardTitle,
  CardFooter,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap"
import Img from "gatsby-image"

const Product = ({ id, title, description, price, fluid }) => {
  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)

  return (
    <Card
      onClick={toggle}
      sx={{ margin: "1vh", padding: "0" }}
      className="col-lg-3 col-md-3 col-sm-5 "
    >
      <Img
        sx={{
          borderRadius: " 1px solid grey",
        }}
        className="card-image-top"
        fluid={fluid}
      />
      <CardBody>
        <CardTitle
          style={{
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "1rem",
            color: "#167d26",
          }}
        >
          {title}
        </CardTitle>
        {/* <CardText style={{ lineHeight: "1rem", fontSize: "small" }}>
          {description}
        </CardText> */}
      </CardBody>
      <CardFooter sx={{ fontWeight: "bold" }}>
        {price} HRK{" "}
        <button
          className="btn btn-sm btn-outline-success text-capitalize float-right 
    "
          // data-item-id={id}
          // data-item-name={title}
          // data-item-price={price}
          // data-item-image={fluid.src}
          // data-item-url="https://eagrar.netlify.com/shop/"
        >
          add to cart
        </button>
      </CardFooter>
      <Modal
        isOpen={modal}
        toggle={toggle}
        style={{ marginTop: "12vh", minWidth: "96%", minHeight: "80%" }}
        backdrop={true}
      >
        <ModalHeader toggle={toggle}> {title}</ModalHeader>
        <ModalBody style={{ display: "inline-flex" }}>
          <Img
            style={{
              borderRadius: " 1px solid grey",
              width: "90vh",
              maxWidth: "50vh",
              maxHeight: "50vh",
              margin: "2vh",
            }}
            className="card-image-top"
            fluid={fluid}
          />
          <div style={{ margin: "2vh" }}>
            <p style={{}}> Opis: {description}</p>
          </div>
        </ModalBody>
        <ModalFooter style={{ justifyContent: "space-between" }}>
          <b>Price: {price} HRK </b>
          <div>
            <Button color="success" onClick={toggle}>
              Add to cart
            </Button>{" "}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </div>
        </ModalFooter>
      </Modal>
    </Card>
  )
}

export default Product
