import * as React from "react"

import "../components/style.scss"

const Bio = (props) => {
  const name = props.name
  const title = props.title
  const img = props.img[0]
  const bio = props.biography
  
  return (
   <div class="row py-2">
    <div class="col-4">
      <img class="rounded " src={img}/>
      <div class="nameTitle">
        <p class="fw-bold">{name}</p>
        <p>{title}</p>
      </div>
    </div>
    <div class="col-8 d-flex align-items-center">
      <p class="biography text-start">
        {bio}
      </p>
    </div>
   </div>
  )
}

export default Bio 
