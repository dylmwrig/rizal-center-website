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
          <h5>CONTACT US</h5>
          <ContactForm />
        </div>
        <div class="col-1"/>
        <div class="col-6">
          <p>We are always happy to listen to any of those with questions or feedback for the FACGC and Rizal Community Center.</p>
        </div>
      </div>
    </div>
  </Layout>
)

export default Contact

export const Head = () => (
    <Seo title="Contact us!" />
)
