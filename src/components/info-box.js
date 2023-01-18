import * as React from "react"

import "../components/style.scss"

//{link ? <p>display link</p>:<br/>}
const InfoBox = (props) => {
  const info = props.info
  const link = props.link
  
  return (
   <div id="info" class="py-3 text-muted fw-light">
      {info.map(function(par, i){
        return(
          <p class="px-4 py-3">
            {par}
            <br/>
          </p>)
        })}
   </div>
  )
}

export default InfoBox
