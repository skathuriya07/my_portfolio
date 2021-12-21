import React from "react";
import { Nav } from "react-bootstrap";
import './Header.css';
import { Link } from "react-router-dom";

function Header(){
      return (
        <ul>
        <li className="navItem first"><Link to="/">Home</Link></li>
        <li className="navItem "><Link to="/internship">Internship</Link></li>
        <li className="navItem "><Link to="/industry">Industry Projects</Link></li>
        <li className="navItem "><Link to="/activity">Co/Extra Curricular Activities</Link></li>
        <li className="navItem "><Link to="/about">About Me</Link></li>
        {/* <li className="navItem "><Link to="/project">Projects</Link></li> */}
    </ul>
        );
    
  }
  
  export default Header;