import * as React from "react"


import PDFViewer from "../components/pdf-viewer.js"
import "../components/style.scss"
import Layout from "../components/layout"
import {Seo} from "../components/seo"

const Newsletter = () => (
  <Layout>
    <div id="" class="container my-5"> 
      <PDFViewer/>
    </div>
  </Layout>
)

export default Newsletter

export const Head = () => (
    <Seo title="Bayanihan FACGC Newsletter" />
)
