import * as React from "react"

import "./style.scss"

const Slideshow = (props) => {
  const imgSplit = props.images.slice(1);
  const slideCount = imgSplit.length;
  const alts = props.alt;
  const interval = props.interval;
  const id = props.id;
  const indicID = "#"+id;
  return (
    <div id={id} class="carousel slide" data-bs-interval={interval} data-bs-ride="carousel">    
      <div class="carousel-indicators">
        <button type="button" data-bs-target={indicID} data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        {imgSplit.map((image, index) => ( 
          <button type="button" data-bs-target={indicID} data-bs-slide-to={index+1}></button>
        ))}
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100 img-fluid" src={props.images[0]} alt={alts[0]}></img>
        </div>
        {imgSplit.map((image, index) => (    
          <div class="carousel-item">
            <img class="d-block w-100 img-fluid" src={image} alt={alts[index+1]}></img>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Slideshow
