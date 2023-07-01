import React from 'react'
import "./Header.css"
import logo from "../../images/logo1.png"
const Header = () => {
  return (
    <div className="header">
      <div className="div1">
        <img src={logo} alt="img not available" className="headerimage"></img>
      </div>
      <div className="div2">
        <button className="button">Subscribe</button>
      </div>
    </div>
  );
}

export default Header;
