import * as React from "react"

import img from "../images/eat-local.jpg"

import ContactForm from "../components/contact-form.js"

import "../components/wish-list.css"
import Layout from "../components/layout"
import {Seo} from "../components/seo"

const EatLocal = () => (
  <Layout>
    <div class="container my-5 text-start">
      <div class="row">
        <ContactForm />
      </div>
    </div>
  </Layout>
)

export default EatLocal 

export const Head = () => (
    <Seo title="Support the Filipino community of Chicago by eating local!" />
)
