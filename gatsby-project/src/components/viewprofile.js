import React from "react"
import { Link } from "gatsby"
import { getCurrentUser, isLoggedIn } from "../utils/auth"


const ViewProfile = ({  }) =>  (
<>
    <h1>Hello {isLoggedIn() ? getCurrentUser().name : "world"}!</h1>
    <p>
      {isLoggedIn() ? (
        <>
          You are logged in, so check your{" "}
          <Link to="//profile">profile</Link>
        </>
      ) : (
        <>
          You should <Link to="//login">log in</Link> to see restricted
          content
        </>
      )}
    </p>
  </>
)

export default ViewProfile