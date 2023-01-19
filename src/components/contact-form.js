import * as React from "react"

import { GoogleFormProvider, useGoogleForm } from "react-google-forms-hooks";

import "../components/style.scss"

const ContactForm = (props) => {
  return (
    <div>
      <form method="POST"
        action="https://docs.google.com/forms/u/2/d/e/1FAIpQLSepzxWNRJb7vCJtz1eDYKlc75c6cvrzCQl9eZ-xKN6P7weqPw/formResponse">
        <input class="input" type="text" name="entry.2005620554"/>
        <input class="input" type="text" name="entry.1696715197"/>
        <input class="input" type="email"name="entry.1045781291" />
        <input class="input" type="text" name="entry.839337160"/>
        <button class="button" type="submit">Submit</button>
      </form>
    </div>
  )
}

export default ContactForm
