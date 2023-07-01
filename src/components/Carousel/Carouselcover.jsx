import React from 'react'
import "./Carousel.css"
import Carousel from './Carousel'
import arrows from "../../images/Arrows.png"
const Carouselcover = () => {
  return (
    <div className="carouselmain">
      <div>
        <Carousel></Carousel>
      </div>
      <div>
        <img src={arrows} alt='img not available'></img>
      </div>
    </div>
  );
}

export default Carouselcover
