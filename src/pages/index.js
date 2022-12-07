import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Slideshow from "../components/slideshow"
import { Seo } from "../components/seo"

const IndexPage = () => (
  <Layout>
    <section className="pt-1 pb-5 text-center container">
      <Slideshow>
      </Slideshow>
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
