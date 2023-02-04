import * as React from "react"
import {useState } from 'react'

//import pdf from "../newsletter/BayanihanNews2.1.pdf"

import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

import "../components/style.scss"

const PDFViewer = (props) => {
  //const [file, setFile] = useState('../newsletter/BayanihanNews2.1.pdf');

  const [pageNum, setPageNum] = useState(1);
  const [numPages, setNumPages] = useState(null);

  //function onFileChange(event) {
  //  setFile(event.target.files[0]);
  //}

  function onDocumentLoadSuccess({ numPages: numPages }) {
    setNumPages(numPages);
    setPageNum(1);
  }

  function changePage(offset) {
    setPageNum(prevPageNumber => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }
  
  return (
    <div>
    </div>
  )
}

      //<Document file={pdf}
      //  onLoadSuccess={onDocumentLoadSuccess}>
      //  <Page pageNumber={pageNum}/>
      //</Document>
      //<div>
      //    <p>
      //      Page {pageNum || (numPages ? 1 : '--')} of {numPages || '--'}
      //    </p>
      //    <button
      //      type="button"
      //      disabled={pageNum<= 1}
      //      onClick={previousPage}
      //    >
      //      Previous
      //    </button>
      //    <button
      //      type="button"
      //      disabled={pageNum>= numPages}
      //      onClick={nextPage}
      //    >
      //      Next
      //    </button>
      //</div>


      //onLoadSuccess={onDocumentLoadSuccess}>

      //{Array.from(new Array(numPages), (el, index) => (
      //  <Page key={`page_${index + 1}`} pageNumber={index + 1} />
      //))}


export default PDFViewer
