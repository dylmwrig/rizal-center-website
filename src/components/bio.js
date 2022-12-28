import * as React from "react"

import "./layout.scss"
import "./bio.css"

const Bio = (props) => {
  const name = props.name
  const title = props.title
  const img = props.img[0]
  const bio = props.biography
  
  return (
   <div class="row py-2">
    <div class="col-4">
      <img class="rounded pb-2" src={img}/>
      <div class="nameTitle">
        <p class="fw-bold">{name}</p>
        <p>{title}</p>
        <p>test@example.com</p>
      </div>
    </div>
    <div class="col-8 d-flex align-middle">
      <p>
        {bio}
      </p>
    </div>
   </div>
  )
}

export default Bio 
