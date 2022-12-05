import * as React from "react"

import "./layout.scss"
import img1 from '../images/gatsby-astronaut.png'
import img2 from '../images/rizal.webp'

const Slideshow = () => {
  return (
    <div id="homeCarousel" class="carousel slide" data-bs-ride="carousel">    
      <ol class="carousel-indicators">
        <li data-target="#homeCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#homeCarousel" data-slide-to="1"></li>
        <li data-target="#homeCarousel" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src={img2} alt="First slide"></img>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src={img1} alt="Second slide"></img>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src={img2} alt="Third slide"></img>
        </div>
      </div>
      <a class="carousel-control-prev" href="#homeCarousel" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#homeCarousel" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  )
}

export default Slideshow
