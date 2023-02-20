import * as React from "react"
import {useState } from 'react'

import "../components/style.scss"

const PDFViewer = (props) => {
  const pdfSrc = props.source
    //<iframe id="PDFViewer" src={`${pdfSrc}#view=fitH`}></iframe>
    //<iframe src="https://drive.google.com/file/d/120OLilytJ7IduFwCqck7Rg0by8RK32Lw/preview" width="640" height="480" allow="autoplay"></iframe>
  return (
    <iframe src={pdfSrc} width="1050" height="900" allow="autoplay"></iframe>
  )
}

export default PDFViewer
