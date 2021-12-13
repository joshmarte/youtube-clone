import React from "react";
import { Link } from "react-router-dom";
import ytlogo from "../img/youtubeIcon.png";
import "./NavBar.css";

const NavBar = (props) => {
  return (
    <nav className="NavBar">
      <img className="header_logo" src={ytlogo} alt="youtubeLogo" />
      <div className="NavBarLink">
        <Link to="/" onClick={props.clearHome}>
          Home
        </Link>
      </div>
      <div className="NavBarLink">
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
};

export default NavBar;
