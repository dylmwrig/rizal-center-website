import * as React from "react"
import {useState } from 'react'

import "../components/style.scss"

const PDFViewer = (props) => {
  const pdfSrc = props.source
  return (
    <iframe id="PDFViewer" src={`${pdfSrc}#view=fitH`}></iframe>
  )
}

export default PDFViewer
