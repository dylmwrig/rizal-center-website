import * as React from "react"
import { useState } from 'react'
import "../components/style.scss"

import downImg from "../images/download.png"
import img from "../images/newsDir.png"
import img2 from "../images/newsDir2.png"
import img3 from "../images/newsDir3.png"
import img4 from "../images/newsDir4.png"
import img5 from "../images/newsDir5.png"
import img6 from "../images/newsDir6.png"

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

  function setter(pdf, info){
    setPDF(pdf)
    setInfo(info)
  }

  function display(){
    return(
      <div class="text-start"> 
        <h3 class="text-dark fancy m-0">Issue {info}</h3>
        <button onClick={() =>setter(null, null)}
          class="btn btn-link"
          type="button">Go back
        </button>
          <br/>
        <PDFViewer source={pdf}/>
      </div>
    )
  }

  function browse(){
    return (
      <div class="row">
        <div class="text-start">
          <p>Click on one of the issues below in order to view it in your browser.<br/>
          You can also click the corresponding issue's download button to download the pdf.</p>
        </div>
        <hr/>
        <div class="pb-3">
          <h1 class="text-center text-dark">2023</h1>
          <div class="row">
            <div class="col-4">
              <button onClick={() =>setter(nl6, "2.2 published 02/28/23")}
                class="btn btn-link"
                type="button">
                <img src={img6}/>
              </button>
              <button onClick={() =>setter(nl6, "2.2 published 02/23")}
                class="btn btn-link"
                type="button">Issue 2.2 pub. 02/28/23
              &nbsp;&nbsp;&nbsp;
              </button>
              <a href="/BayanihanNews2.2.pdf" download> 
                <img src={downImg} alt="Download"/>
              </a>
            </div>
            <div class="col-4">
              <button onClick={() =>setter(nl5, "2.1 published 01/26/23")}
                class="btn btn-link"
                type="button">
                <img src={img5}/>
              </button>
              <button onClick={() =>setter(nl5, "2.1 published 01/26/23")}
                class="btn btn-link"
                type="button">Issue 2.1 pub. 01/26/23
              &nbsp;&nbsp;&nbsp;
              </button>
              <a href="/BayanihanNews2.1.pdf" download> 
                <img src={downImg} alt="Download"/>
              </a>
            </div>
          </div>
        </div>
      <hr/>
      </div>
    )
  }

  function test(){
    return (
          <div class="col-2 ">
            <h3 class="pb-2">Select an Issue</h3>

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
    )
  }

  const [pdf, setPDF] = useState(null)
  const [info, setInfo] = useState(null)

  return (
  <Layout>
    <div class="container my-2"> 
      <div class="row">
      <div class="col-10">
        <h1 class="text-start my-2 text-secondary">FACGC's Bayanihan Newsletter</h1>
      </div>
      </div>
      <div class="row">
        {pdf != null
          ? display()
          : browse()
          }
      </div>
    </div>
  </Layout>
  )
}

export default Newsletter

export const Head = () => (
    <Seo title="Bayanihan FACGC Newsletter" />
)
