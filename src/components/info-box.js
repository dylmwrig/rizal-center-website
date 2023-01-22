import * as React from "react"

import "../components/style.scss"

//currently only link goes to contact page
const InfoBox = (props) => {
  const info = props.info
  const link = props.link
  
  return (
    <div id="info" class="px-4 pb-2 pt-3 text-start"> 
      {info.map(function(par, i){
        return(
          <p>{par}</p>)
        })}
      {link 
        ? <a class="btn btn-primary mb-2"  
             role="button"
             href="/contact/">Contact Us</a>
        : <p></p>}
   </div>
  )
}

export default InfoBox