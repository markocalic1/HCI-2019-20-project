import React, { Component } from "react"
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled, { keyframes } from "styled-components"
import { fadeIn } from "react-animations"

const fadeInAnimation = keyframes`${fadeIn}`

const fadeInDiv = styled.div`
  animation: 1s ${fadeInAnimation};
`

export default class ScrollToTop extends Component {
  constructor(props) {
    super(props)
    this.state = {
      is_visible: false,
    }
  }

  componentDidMount() {
    var scrollComponent = this
    document.addEventListener("scroll", function(e) {
      scrollComponent.toggleVisibility()
    })
  }

  toggleVisibility() {
    if (window.pageYOffset > 300) {
      this.setState({
        is_visible: true,
      })
    } else {
      this.setState({
        is_visible: false,
      })
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  render() {
    const { is_visible } = this.state
    return (
      <div
        className="scroll-to-top"
        style={{
          position: "fixed",
          bottom: "2rem",
          right: "1rem",
          cursor: "pointer",
          transitionTimingFunction: "ease-in-out",
          fadeInDiv,
        }}
      >
        {is_visible && (
          <div onClick={() => this.scrollToTop()}>
            <div
              className="btn"
              style={{ borderRadius: "2px", backgroundColor: "#5656569c" }}
            >
              <FontAwesomeIcon icon={faArrowUp} size="2x" color="#167d26" />
            </div>
          </div>
        )}
      </div>
    )
  }
}
