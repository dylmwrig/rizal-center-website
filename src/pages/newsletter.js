import * as React from "react"
import { useState } from 'react'
import "../components/style.scss"

import img from "../images/download.png"

import PDFViewer from "../components/pdf-viewer.js"
import InfoBox from "../components/info-box.js"
import Layout from "../components/layout"
import {Seo} from "../components/seo"

const Newsletter = () => {
  //lower = older
  const nl1 = "https://drive.google.com/file/d/120OLilytJ7IduFwCqck7Rg0by8RK32Lw/preview"
  const nl2 = "https://drive.google.com/file/d/1-9iYTbP-5aA29PV-GzvlfbQrCOfIC_ml/preview"
  const nl3 = "https://drive.google.com/file/d/1wYtCKEq5bwSd_ZRbeaxBcDeS0tgEW0Mr/preview"
  const nl4 = "https://drive.google.com/file/d/1QMJtksOqea3KxAWAqNoZYaOc13F4ZWka/preview"
  const nl5 = "https://drive.google.com/file/d/1sw2z5hxPrsdEy_FMEoIuC2-PSjAdxy0c/preview"
  const nl6 = "https://drive.google.com/file/d/1ZXJNx4ARcjYWuWv61nMrg2-VnkaG8Sll/preview"

  const [pdf, setPDF] = useState(nl6)
  //const pdfArr = [nl1, nl2, nl3, nl4, nl5]
  //const pdfMap = pdfArr.map(())
  return (
  <Layout>
    <div class="container my-2"> 
      <div class="row">
      <div class="col-10">
        <h2 class="text-left my-2">FACGC's Bayanihan Newsletter</h2>
      </div>
      </div>
      <div class="row">
          <div class="col-10">
            <PDFViewer source={pdf}/>
          </div>
          <div class="col-2 ">
            <h3 class="pb-2">Select an Issue</h3>

            <button onClick={() =>setPDF(nl6)}
              class="btn btn-link pdf-button"
              type="button">Issue 2.2 &emsp;02/23
            </button>
            &nbsp;&nbsp;&nbsp;
            <a class="text-end" href="/BayanihanNews2.2.pdf" download> 
              <img src={img} alt="Download"/>
            </a>
            <hr/>
            <button onClick={() =>setPDF(nl5)}
              class="btn btn-link pdf-button"
              type="button">Issue 2.1 &emsp;01/23
            </button>
            &nbsp;&nbsp;&nbsp;
            <a class="text-end" href="/BayanihanNews2.1.pdf" download> 
              <img src={img} alt="Download"/>
            </a>
            <hr/>
            <button onClick={() =>setPDF(nl4)}
              class="btn btn-link pdf-button"
              type="button">Issue 1.4 &emsp;11/22
            </button>
            &nbsp;&nbsp;&nbsp;
            <a class="text-end" href="/BayanihanNews1.4.pdf" download> 
              <img src={img} alt="Download"/>
            </a>
            <hr/>
            <button onClick={() =>setPDF(nl3)}
              class="btn btn-link pdf-button"
              type="button">Issue 1.3 &emsp;11/22
            </button>
            &nbsp;&nbsp;&nbsp;
            <a class="text-end" href="/BayanihanNews1.3.pdf" download> 
              <img src={img} alt="Download"/>
            </a>
            <hr/>
            <button onClick={() =>setPDF(nl2)}
              class="btn btn-link pdf-button"
              type="button">Issue 1.2 &emsp;10/22
            </button>
            &nbsp;&nbsp;&nbsp;
            <a class="text-end" href="/BayanihanNews1.2.pdf" download> 
              <img src={img} alt="Download"/>
            </a>
            <hr/>
            <div class="pb-4">
              <button onClick={() =>setPDF(nl1)}
                class="btn btn-link pdf-button"
                type="button">Issue 1.1 &emsp;09/22
              </button>
              &nbsp;&nbsp;&nbsp;
              <a href="/BayanihanNews1.1.pdf" download> 
                <img src={img} alt="Download"/>
              </a>
            </div>
            <InfoBox 
              info={["Questions or comments about our newsletter?",
              "Let us know!"]}
              linkPres={true}
              link="/contact/"/>
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
