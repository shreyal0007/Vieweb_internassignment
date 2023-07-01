import React from 'react'
import "../Header/Header.css"
import logo from "../../images/logo1.png";
import socialicons from "../../images/Socialicons.png";

const Footer = () => {
  return (
    <div className="header">
      <div className="div1">
        <img src={logo} alt="img not available" className="headerimage"></img>
        <p className='footertext'>Copyright © vieweb.co.in All rights reserved.</p>
      </div>
      <div className="div2">
        <img
          src={socialicons}
          alt="img not available"
          className="socialicons"
        ></img>
      </div>
    </div>
  );
}

export default Footer
