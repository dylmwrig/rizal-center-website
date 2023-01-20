import * as React from "react"
import { useRef } from 'react';

import emailjs from '@emailjs/browser';
import { Helmet } from "react-helmet"
//import { GoogleFormProvider, useGoogleForm } from "react-google-forms-hooks";

import "../components/style.scss"

const ContactForm = (props) => {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_un7fqvg', 'contact_form',form.current,'0WnMAOVQ8zkteNMkx')
      .then(
        (result) => {
          alert('message sent successfully...');
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div class="row">
      <h5>Contact us</h5>
      <form class="" ref={form} onSubmit={sendEmail}>
        <input type='text' placeholder='Name' name='user_name' />
        <input type='email' placeholder='Email address' name='user_email' />
        <textarea name='message' type='text' placeholder='message' />
        <button type="submit" value="Submit">Submit</button>
      </form>
    </div>
  )
}

export default ContactForm

//      <Helmet>
//        <script type="text/javascript"
//                src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js">
//        </script>
//        <script type="text/javascript">
//          {function(){
//              emailjs.init("0WnMAOVQ8zkteNMkx");
//           }}
//        </script>
//      </Helmet>

      //<form method="POST"
      //  action="https://docs.google.com/forms/u/2/d/e/1FAIpQLSepzxWNRJb7vCJtz1eDYKlc75c6cvrzCQl9eZ-xKN6P7weqPw/formResponse">
      //  <input class="input" type="text" name="entry.2005620554"/>
      //  <input class="input" type="text" name="entry.1696715197"/>
      //  <input class="input" type="email"name="entry.1045781291" />
      //  <input class="input" type="text" name="entry.839337160"/>
      //  <button class="button" type="submit">Submit</button>
      //</form>
