import * as React from "react"
import { useState } from 'react'

import nl from "../newsletter/BayanihanNews2.1.pdf"
import nl2 from "../newsletter/sample.pdf"
import PDFViewer from "../components/pdf-viewer.js"

import "../components/style.scss"
import Layout from "../components/layout"
import {Seo} from "../components/seo"

const Newsletter = () => {
  const [pdf, setPDF] = useState(nl)
  return (
  <Layout>
    <div id="" class="container my-5"> 
      <PDFViewer source={pdf}/>
    </div>
    <button onClick={() =>setPDF(nl2)}
      class="btn btn-link"
      type="button">test</button>
  </Layout>
  )
}

export default Newsletter

export const Head = () => (
    <Seo title="Bayanihan FACGC Newsletter" />
)
