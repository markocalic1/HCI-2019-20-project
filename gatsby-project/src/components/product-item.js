import React, { Component } from "react"
import {
  Row,
  Col,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap"
import Product from "../templates/product"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const getCategories = items => {
  let tempItems = items.map(items => {
    return items.node.category
  })
  let tempCategories = new Set(tempItems)
  let categories = Array.from(tempCategories)

  categories = ["all", ...categories]
  return categories
}

export default class ProductList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: props.items.edges,
      productItems: props.items.edges,
      categories: getCategories(props.items.edges),
    }
  }
  handleItems = category => {
    let tempItems = [...this.state.items]
    if (category === "all") {
      this.setState(() => {
        return { productItems: tempItems }
      })
    } else {
      let items = tempItems.filter(({ node }) => node.category === category)
      this.setState(() => {
        return { productItems: items }
      })
    }
  }

  // handleSearch = searchValue => {
  //   const [searchTerm, setSearchTerm] = React.useState("")
  //   setSearchTerm(searchValue.target.value)
  //   let tempItems = [...this.state.items]

  //   let items = tempItems.filter(({ node }) => {
  //     const title = node.title.toLowerCase()

  //     if (title.includes(searchValue.toLowerCase())) {
  //       this.setState(() => {
  //         return { productItems: items }
  //       })
  //     }
  //   })
  // }

  render() {
    if (this.state.items.length > 0) {
      return (
        <section className="menu py-2">
          <div className="">
            <Row style={{ width: "100%", margin: "0" }}>
              <Col>
                <Row
                  className="mx-auto justify-content-center px-2"
                  style={{
                    width: "fit-content",
                    justifyContent: "center",
                    margin: "auto",
                  }}
                >
                  <div
                    className="searchbar"
                    style={{
                      height: "38px",
                      marginTop: "35px",
                      paddingTop: "10px",
                    }}
                  >
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <FontAwesomeIcon icon={faSearch} size="1x" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Search products"
                        onChange={e => {
                          let tempItems = [...this.state.items]

                          let items = tempItems.filter(({ node }) =>
                            node.title
                              .toLowerCase()
                              .includes(e.target.value.toLowerCase())
                          )
                          if (items.length > 0) {
                            this.setState(() => {
                              return { productItems: items }
                            })
                          } else {
                            this.setState(() => {
                              return { productItems: tempItems }
                            })
                          }
                        }}
                      />
                    </InputGroup>
                  </div>
                  <div style={{ textAlign: "center", paddingTop: "15px" }}>
                    <h6>Filter by category :</h6>
                    {this.state.categories.map((category, index) => {
                      return (
                        <button
                          key={index}
                          className=" btn text-capitalize mx-2 mb-3"
                          style={{ backgroundColor: "#167d26", color: "white" }}
                          onClick={() => this.handleItems(category)}
                        >
                          {category}
                        </button>
                      )
                    })}
                  </div>
                </Row>
                <Row style={{ justifyContent: "center", margin: "auto" }}>
                  {this.state.productItems.map(({ node }) => {
                    return (
                      <Product
                        id={node.id}
                        title={node.title}
                        description={node.description.description}
                        price={node.price}
                        fluid={node.image.fluid}
                      />
                    )
                  })}
                </Row>
              </Col>
            </Row>
          </div>
        </section>
      )
    } else {
      return (
        <section className="menu py-5">
          <div className="container">
            <Row>
              <Col md="8">
                <h1>There is no items to display</h1>
              </Col>
              <Col md="4"></Col>
            </Row>
          </div>
        </section>
      )
    }
  }
}
