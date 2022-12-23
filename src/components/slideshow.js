import * as React from "react"

import "./layout.scss"
import "./slideshow.css"

const Slideshow = ({ images }) => {
  return (
    <div id="carouselWrap">
      <div id="homeCarousel" class="carousel slide" data-bs-ride="carousel">    
        <ol class="carousel-indicators">
          <li data-target="#homeCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></li>
          <li data-target="#homeCarousel" data-bs-slide-to="1"></li>
          <li data-target="#homeCarousel" data-bs-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100 img-fluid" src={images[0]} alt="Rizal Heritage Center"></img>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100 img-fluid" src={images[1]} alt="Second slide"></img>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100 img-fluid" src={images[2]} alt="Third slide"></img>
          </div>
        </div>
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
      </div>
    </div>
  )
}

export default Slideshow
