import React from "react"
import { Link, navigate } from "gatsby"
import { getCurrentUser, isLoggedIn, logout } from "../utils/auth"

const Logout = ({  }) => {
  const {name}=getCurrentUser()
  const content = { message: "", login: true}
  if (isLoggedIn()) {
    content.message = "Hello"
  } else {
    
  }
  return (
    <div
      
    >
      <span><h6>{content.message},{" "}
          <Link to="//profile"> {name}</Link></h6>
      </span>
      <nav>
      
        {isLoggedIn() ? (
          <a
            href="/"
            onClick={event => {
              event.preventDefault()
              logout(() => navigate(`//`))
            }}
          >
            Logout
          </a>
        ) : null}
      </nav>
    </div>
  )
}

export default Logout