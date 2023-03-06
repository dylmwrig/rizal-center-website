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
          class="btn btn-link text-danger py-2"
          type="button">Go back
        </button>
          <br/>
        <PDFViewer source={pdf}/>
      </div>
    )
  }

  function browse(){
    return (
      <div> 
        <div class="text-start col-6">
          <InfoBox 
            info={["Click on one of the issues below in order to view it in your browser. You can also click the corresponding issue's download button to download the pdf.",
            "If you have any questions, concerns, or suggestions for the newsletter, please let us know!"]}
            linkPres={true}
            link="/contact/"/>
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
      <hr/>
          <h1 class="text-center text-dark">2022</h1>
          <div class="row">
            <div class="col-4">
              <button onClick={() =>setter(nl4, "1.4 published 11/29/22")}
                class="btn btn-link"
                type="button">
                <img src={img4}/>
              </button>
              <button onClick={() =>setter(nl4, "1.4 published 11/29/22")}
                class="btn btn-link"
                type="button">Issue 1.4 pub. 11/29/22
              &nbsp;&nbsp;&nbsp;
              </button>
              <a href="/BayanihanNews1.4.pdf" download> 
                <img src={downImg} alt="Download"/>
              </a>
            </div>
            <div class="col-4">
              <button onClick={() =>setter(nl3, "1.3 published 11/02/22")}
                class="btn btn-link"
                type="button">
                <img src={img3}/>
              </button>
              <button onClick={() =>setter(nl3, "1.3 published 11/02/22")}
                class="btn btn-link"
                type="button">Issue 1.3 pub. 11/02/22
              &nbsp;&nbsp;&nbsp;
              </button>
              <a href="/BayanihanNews1.3.pdf" download> 
                <img src={downImg} alt="Download"/>
              </a>
            </div>
            <div class="col-4">
              <button onClick={() =>setter(nl2, "1.2 published 10/05/22")}
                class="btn btn-link"
                type="button">
                <img src={img2}/>
              </button>
              <button onClick={() =>setter(nl2, "1.2 published 10/05/22")}                
                class="btn btn-link"
                type="button">Issue 1.2 pub. 10/05/22
              &nbsp;&nbsp;&nbsp;
              </button>
              <a href="/BayanihanNews1.2.pdf" download> 
                <img src={downImg} alt="Download"/>
              </a>
            </div>
          </div>
          <br/>
          <div class="row">
            <div class="col-4">
              <button onClick={() =>setter(nl1, "1.1 published 09/23/22")}
                class="btn btn-link"
                type="button">
                <img src={img}/>
              </button>
              <button onClick={() =>setter(nl1, "1.1 published 09/23/22")}                
                class="btn btn-link"
                type="button">Issue 1.1 pub. 09/23/22
              &nbsp;&nbsp;&nbsp;
              </button>
              <a href="/BayanihanNews1.1.pdf" download> 
                <img src={downImg} alt="Download"/>
              </a>
            </div>
          </div>
        </div>
      <hr/>
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
