import * as React from "react"
import { useState } from 'react'
import "../components/style.scss"

import PDFViewer from "../components/pdf-viewer.js"
import Layout from "../components/layout"
import {Seo} from "../components/seo"

//import nl1 from "/BayanihanNews1.1.pdf"
//import nl1 from "../../public/BayanihanNews1.1.pdf"
//import nl1 from "../newsletter/BayanihanNews1.1.pdf"
//import nl2 from "../newsletter/BayanihanNews1.2.pdf"
//import nl3 from "../newsletter/BayanihanNews1.3.pdf"
//import nl4 from "../newsletter/BayanihanNews1.4.pdf"
//import nl5 from "../newsletter/BayanihanNews2.1.pdf"

const Newsletter = () => {
  const nl1 = "/BayanihanNews1.1.pdf"
  const nl2 = "/BayanihanNews1.1.pdf"
  const nl3 = "/BayanihanNews1.1.pdf"
  const nl4 = "/BayanihanNews1.1.pdf"
  const nl5 = "/BayanihanNews1.1.pdf"

  const [pdf, setPDF] = useState(nl1)
  //const pdfArr = [nl1, nl2, nl3, nl4, nl5]
  //const pdfMap = pdfArr.map(())
  return (
  <Layout>
    <div class="container my-2"> 
      <h2 class="text-center mb-5">Bayanihan FACGC Newsletter</h2>
      <div class="row">
          <div class="col-2"/> 
          <div class="col-8">
            <PDFViewer source={pdf}/>
          </div>
          <div class="col-2 text-start bg-primary">
            <h3 class="pb-2">Select an issue</h3>
            <button onClick={() =>setPDF(nl5)}
              class="btn btn-link"
              type="button">Issue 2.1 &emsp;01/26/23
            </button>
            <hr/>
            <button onClick={() =>setPDF(nl4)}
              class="btn btn-link"
              type="button">Issue 1.4 &emsp;11/29/22
            </button>
            <hr/>
            <button onClick={() =>setPDF(nl3)}
              class="btn btn-link"
              type="button">Issue 1.3 &emsp;11/02/22
            </button>
            <hr/>
            <button onClick={() =>setPDF(nl2)}
              class="btn btn-link"
              type="button">Issue 1.2 &emsp;10/05/22
            </button>
            <hr/>
            <button onClick={() =>setPDF(nl2)}
              class="btn btn-link"
              type="button">Issue 1.1 &emsp;09/23/22
            </button>
          </div>
      </div>
    </div>
  </Layout>
  )
}

export default Newsletter

export const Head = () => (
    <Seo title="Bayanihan FACGC Newsletter" />
)
