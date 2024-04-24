import React, { useEffect, useState,useRef } from 'react';
import { Link } from "react-router-dom";

const NavBar = () => {

    const navLinksRef = useRef(null);

    const showMenu = () => {
      navLinksRef.current.style.right = "0";
    };
  
    const hideMenu = () => {
      navLinksRef.current.style.right = "-200px";
    };

    return(
        <nav>
          <Link to="/"><img src="images/logo.png" /></Link>
          <div className="nav-links" ref={navLinksRef}>
            <i className="fa fa-times" onClick={hideMenu}></i>
            <ul>
              <li><Link to="/">HOME</Link></li>
              <li><Link to="/about">ABOUT</Link></li>
              <li><Link to="/course">COURSE</Link></li>
              <li><Link to="/blog">BLOG</Link></li>
              <li><Link to="/contact">CONTACT</Link></li>
            </ul>
          </div>
          <i className="fa fa-bars" onClick={showMenu}></i>
        </nav>
    )
}

export default NavBar;