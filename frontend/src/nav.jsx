import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import vicLogo from "./assets/vic_logo.png";/// import hadi///
// import groupePicture from "./assets/picture_home.png";/// import hadi///
const nav = () => {
  return (
      <div id="nav_bare">
        <img id="vic_logo" src={vicLogo} alt="logo nav" />
        <nav>
          <Link to="/" id="home">Home</Link>
          <Link to="/about" id="about">About us</Link>
          <Link to="/departments" id="dep">Our departments</Link>
          <Link to="/team" id="team">Our team</Link>
          <Link to="/events" id="event">Our events</Link>
        </nav>
      </div>
  );
};

export default nav;
