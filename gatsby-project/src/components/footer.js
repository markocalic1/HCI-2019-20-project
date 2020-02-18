import React from "react"
import {
  faFacebookSquare,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const FooterContainer = ({ props }) => {
  return (
    <div className="bg-dark text-center pt-4">
      <div className="social-media-buttons">
        <a
          href="https://www.facebook.com/eAgrar/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faFacebookSquare}
            size="2x"
            color="white"
            style={{ padding: "4px" }}
          />
        </a>
        <a>
          <FontAwesomeIcon
            icon={faLinkedin}
            size="2x"
            color="white"
            style={{ padding: "4px" }}
          />
        </a>
        <a>
          <FontAwesomeIcon
            icon={faInstagram}
            size="2x"
            color="white"
            style={{ padding: "4px" }}
          />
        </a>
      </div>
      <div
        className="footer-copyright text-center text-white bg-dark py-3 text-light"
        style={{ position: "relative", width: "100%", bottom: "0" }}
      >
        © 2019 Copyright:
        <a className="text-white" href="/" title="eagrar">
          {" "}
          eAgrar
        </a>
      </div>
    </div>
  )
}

export default FooterContainer
