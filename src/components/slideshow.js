import * as React from "react"

import "./layout.scss"
import "./slideshow.css"
import img1 from '../images/rizal-center.png'
import img2 from '../images/rizal-center2.jpg'
import img3 from '../images/rizal-center3.jpg'

const Slideshow = () => {
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
            <img class="d-block w-100 img-fluid" src={img1} alt="Rizal Heritage Center"></img>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100 img-fluid" src={img2} alt="Second slide"></img>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100 img-fluid" src={img3} alt="Third slide"></img>
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
