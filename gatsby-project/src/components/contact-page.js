import React, { useState } from "react"

import MyForm from "../components/contact-form"
import { Card } from "reactstrap"

const ContactPage = () => {
  return (
    <Card>
      <MyForm></MyForm>
    </Card>
  )
}

export default ContactPage
