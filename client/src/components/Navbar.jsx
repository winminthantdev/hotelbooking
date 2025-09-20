import React, { useEffect, useState } from "react";
import { Link } from "react-router";

import favicon from "../assets/img/fav/favicon.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      const getscrolltop = window.scrollY || document.documentElement.scrollTop;
      // console.log(getscrolltop);

      setScrolled(getscrolltop >= 50);
    };

    window.addEventListener("scroll", scrollHandler);

    return () => window.removeEventListener("scroll", scrollHandler);
  }, [scrolled]);

  return (
    <>
      {/* Start  Nav Bar */}
      <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? '' : 'scrolleds'}`}>
        <a href="index.html" className="navbar-brand text-light mx-lg-5 ">
          <img src={favicon} width="70px" alt="favicon"/>
          <span className="h2 fw-bold mx-2">Golden <span className="h3">Hotel</span></span>
        </a>

        <button type="button" className="navbar-toggler navbuttons" data-bs-toggle="collapse" data-bs-target="#nav">
          <div className="bg-light lines1"></div>
          <div className="bg-light lines2"></div>
          <div className="bg-light lines3"></div>
        </button>

        <div id="nav" className="navbar-collapse collapse justify-content-end text-uppercase fw-bold">
          <ul className="navbar-nav">
            <li className="navbar-item"><a href="#" className="nav-link mx-2 menuitems">Home</a></li>
            <li className="navbar-item"><a href="#" className="nav-link mx-2 menuitems">Explore</a></li>
            <li className="navbar-item"><a href="#" className="nav-link mx-2 menuitems">Services</a></li>
            <li className="navbar-item"><a href="#" className="nav-link mx-2 menuitems">Dining</a></li>
            <li className="navbar-item"><a href="#" className="nav-link mx-2 menuitems">Reservation</a></li>
            <li className="navbar-item"><a href="#" className="nav-link mx-2 menuitems">Contact</a></li>
          </ul>
        </div>
      </nav>
      {/* End Nav Bar */}
    </>
  );
};

export default Navbar;
