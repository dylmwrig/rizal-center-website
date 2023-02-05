import * as React from "react"
import {useState } from 'react'

import "../components/style.scss"

const PDFViewer = (props) => {
  const pdfSrc = props.source
  return (
    <div class="row">
      <div class="col-3"/>
      <div class="col-6">
        <iframe id="PDFViewer" src={`${pdfSrc}#view=fitH`}></iframe>
      </div>
      <div class="col-3"/>
    </div>
  )
}

export default PDFViewer
