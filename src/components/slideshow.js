import * as React from "react"

import "./layout.scss"
import "./slideshow.css"

const Slideshow = (props) => {
  const imgSplit = props.images.slice(1);
  const alts = props.alt;
  const id = props.id
  return (
    <div id={id}>{/*could be useful for individual carousel styling*/}
      <div id="homeCarousel" class="carousel slide" data-bs-ride="carousel">    
        <ol class="carousel-indicators">
          <li data-target="#homeCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></li>
          <li data-target="#homeCarousel" data-bs-slide-to="1"></li>
          <li data-target="#homeCarousel" data-bs-slide-to="2"></li>
        </ol>
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
    </div>
  )
}

export default Slideshow
        {/*
        <button class="carousel-control-prev" data-bs-target="#homeCarousel" data-bs-slide="prev" type="button">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </button>
        <button class="carousel-control-next" data-bs-target="#homeCarousel" data-bs-slide="next" type="button">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </button>
        */}
