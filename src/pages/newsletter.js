import * as React from "react"

import pdf from "../newsletter/BayanihanNews2.1.pdf"

import "../components/style.scss"
import Layout from "../components/layout"
import {Seo} from "../components/seo"

const Newsletter = () => (
  <Layout>
    <div id="" class="container my-5"> 
      <a href={pdf}>yea</a>
    </div>
  </Layout>
)

export default Newsletter

export const Head = () => (
    <Seo title="Bayanihan FACGC Newsletter" />
)
