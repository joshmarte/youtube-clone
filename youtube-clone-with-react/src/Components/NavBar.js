// import { Component } from "react"
import React from "react";
import { Link } from "react-router-dom";
import ytlogo from "../img/youtubeIcon.png";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="NavBar">
      <img className="header_logo" src={ytlogo} alt="youtubeLogo" />
      <div className="NavBarLink">
        <Link to="/">Home</Link>
      </div>
      <div className="NavBarLink">
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
};

export default NavBar;

// class NavBar extends Component {
//     render(){
//         return(
//             <nav classname= "NavBarItems">
//                 <h1></h1>
//                 <div className="menu"></div>

//             </nav>
//         )
//     }
// }
