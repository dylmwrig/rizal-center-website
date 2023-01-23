import * as React from "react"

import ContactForm from "../components/contact-form.js"

import "../components/wish-list.css"
import Layout from "../components/layout"
import {Seo} from "../components/seo"
//<p>Please fill out the form and we will get back to you as soon as possible.</p>

const Contact = () => (
  <Layout>
    <div class="container my-5 text-start">
      <div class="row">
        <div class="col-5">
          <h4 class="pb-2">CONTACT US</h4>
          <p>We are always happy to listen to any of those with questions or feedback for the FACGC and Rizal Community Center.</p>
          <p class="fw-bold m-0">Filipino American Council of Greater Chicago</p>
          <p>1332 W. Irving Park Road, Chicago, IL 60613, US
             sallyvelascor@yahoo.com (1 773-541-1725)</p>
          <p class="fw-bold">Hours By Appointment</p>
          <p>
            Mon   Closed<br/>
            Tue   12:00 pm - 05:00 pm<br/>
            Wed   12:00 pm - 05:00 pm<br/>
            Thu   12:00 pm - 05:00 pm<br/>
            Fri   12:00 pm - 05:00 pm<br/>
            Sat   09:00 am - 02:00 pm<br/>
            Sun   09:00 am - 02:00 pm
          </p>
        </div>
        <div class="col-1"/>
        <div class="col-6">
          <ContactForm />
        </div>
      </div>
    </div>
  </Layout>
)

export default Contact

export const Head = () => (
    <Seo title="Contact us!" />
)
