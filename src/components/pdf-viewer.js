import * as React from "react"
import {useState } from 'react'

import pdf from "../newsletter/BayanihanNews2.1.pdf"

import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

import "../components/style.scss"

const PDFViewer = (props) => {
  //const [file, setFile] = useState('../newsletter/BayanihanNews2.1.pdf');

  const [numPages, setNumPages] = useState(null);

  //function onFileChange(event) {
  //  setFile(event.target.files[0]);
  //}

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }
  
  return (
    <Document file={pdf}>
      <Page pageNumber={1}/>
    </Document>
  )
}
      //onLoadSuccess={onDocumentLoadSuccess}>

      //{Array.from(new Array(numPages), (el, index) => (
      //  <Page key={`page_${index + 1}`} pageNumber={index + 1} />
      //))}


export default PDFViewer
