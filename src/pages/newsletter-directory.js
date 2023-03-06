import * as React from "react"
import { useState } from 'react'
import "../components/style.scss"

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

const NewsletterDir = () => {
  //lower = older
  const nl1 = "https://drive.google.com/file/d/120OLilytJ7IduFwCqck7Rg0by8RK32Lw/preview"
  const nl2 = "https://drive.google.com/file/d/1-9iYTbP-5aA29PV-GzvlfbQrCOfIC_ml/preview"
  const nl3 = "https://drive.google.com/file/d/1wYtCKEq5bwSd_ZRbeaxBcDeS0tgEW0Mr/preview"
  const nl4 = "https://drive.google.com/file/d/1QMJtksOqea3KxAWAqNoZYaOc13F4ZWka/preview"
  const nl5 = "https://drive.google.com/file/d/1sw2z5hxPrsdEy_FMEoIuC2-PSjAdxy0c/preview"
  const nl6 = "https://drive.google.com/file/d/1ZXJNx4ARcjYWuWv61nMrg2-VnkaG8Sll/preview"

  return (
  <Layout>
    <div class="container my-2"> 
      <div class="row">
          <h1 class="text-start text-secondary">2023</h1>
          <div class="col-4">
            
          </div>
      </div>
      <hr/>
    </div>
  </Layout>
  )
}

export default NewsletterDir

export const Head = () => (
    <Seo title="Bayanihan FACGC Newsletter" />
)
