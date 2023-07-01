import React from 'react'
import "./Mask1"
import "./Mask1.css"
import bg from "../../images/Bg.png"
import "../Mask2/Mask2.css"
import Player from "../../images/Player.png"
const Mask1 = () => {
  return (
    <div className="maskmaindiv">
      <div className="maskdiv">
        <div>
          <p className="masksubdiv1">
            Super Excited (aka The Saturday Edition)
          </p>
        </div>
        <div>
          <p className="masksubdiv2">Indie Stories · Jan 24 · Episode 234</p>
        </div>
        <div>
          <img src={Player} className='maskimage'></img>
        </div>
      </div>
    </div>
  );
}

export default Mask1
