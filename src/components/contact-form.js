import * as React from "react"
import { useRef, useState } from 'react';

import emailjs from '@emailjs/browser';

import "../components/style.scss"

const ContactForm = (props) => {
  const form = useRef();
  const [volForm, setForm] = useState(false);
  const [submitted, setSubmit] = useState(false);
  
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_un7fqvg', 'contact_form',form.current,'0WnMAOVQ8zkteNMkx')
      .then(
        (result) => {
          console.log(result.text);
          document.getElementById("contactForm").reset();
          setSubmit(true);
        },
        (error) => {
          alert('There has been an error processing your request, please try again.');
          console.log(error.text);
        }
      );
  }

  return (
    <div> 
      {submitted 
        ? <div><p class="fw-bold">Thank you for your submission!</p><p>We have received your message and will get back to you as soon as possible.</p></div>
        : <p>You can also reach us via email by using this form and we will get back to you as soon as possible.</p>}
      <form id="contactForm" ref={form} onSubmit={sendEmail}>
        <div class="row py-1 form-group">
          <div class="form-outline col-6">
            <label class="form-label" for="fnameInput">First Name</label>
            <input class="form-control" id="fnameInput" type='text' placeholder='First Name' name='first_name' required/>
          </div>
          <div class="col-6">
          <label class="form-label" for="lnameInput">Last Name</label>
          <input class="form-control" id="lnameInput" type='text' placeholder='Last Name' name='last_name' required/>
          </div>
        </div>
        <div class="py-1 form-group">
          <label class="form-label" for="emailInput">Email</label>
          <input class="form-control" id="emailInput" type='email' placeholder='Email address' name='user_email' required/>
        </div>
        <div class="py-1 form-group">
          <label class="form-label" for="msgInput">Your message</label>
          <textarea class="form-control" id="msgInput" name='message' type='text' placeholder='Message' required/>
        </div>
        <button class="btn btn-primary" type="submit" value="Submit">Submit</button>
      </form>
    </div>
  )
}

export default ContactForm
