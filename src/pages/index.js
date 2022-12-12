import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Slideshow from "../components/slideshow"
import { Seo } from "../components/seo"

const IndexPage = () => (
  <Layout>
    <section className="pt-4 pb-5 text-center container">
      <div class="row">
        <div class="col-6">
          <Slideshow> 
          </Slideshow>
        </div>
        <div id="slideLabel" class="col-6 d-flex align-items-center justify-content-center text-center">
          <p>
            We're<br/>Building<br/>Community!
          </p>
        </div>
      </div>
      <div className="row">
        <Link to="/about/" className="btn btn-primary my-2">About</Link>
        <Link to="/page-2/" className="btn btn-secondary my-2">Go to page 2</Link>
      </div>
    </section>
  </Layout>
)

export default IndexPage

export const Head = () => (
    <Seo />
)
