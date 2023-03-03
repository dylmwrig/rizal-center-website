import * as React from "react"

import "../components/style.scss"

//currently only link goes to contact page
const InfoBox = (props) => {
  const info = props.info
  const link = props.link
  const linkPres = props.link
  const linkText = props.linkText
  const newTab = props.newTab
  var btnText = ''
  if (linkText === undefined){
    btnText="Contact us"
  } else {
    btnText = linkText
  }
  
  return (
    <div id="info" class="px-4 pb-2 pt-3 text-start"> 
      {info.map(function(par, i){
        return(
          <p>{par}</p>)
        })}
      {linkPres 
        ? newTab 
          ? <a class="btn btn-primary mb-2"  
              target="_blank"
              role="button"
              href={link}>{btnText}</a>

          : <a class="btn btn-primary mb-2"  
               role="button"
               href={link}>{btnText}</a>
        : <p></p>}
   </div>
  )
}

export default InfoBox
