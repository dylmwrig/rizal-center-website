import * as React from "react"

import ContactForm from "../components/contact-form.js"

import "../components/wish-list.css"
import Layout from "../components/layout"
import {Seo} from "../components/seo"

const Contact = () => (
  <Layout>
    <div class="container my-5 text-start">
      <ContactForm />
    </div>
  </Layout>
)

export default Contact

export const Head = () => (
    <Seo title="Contact us!" />
)
