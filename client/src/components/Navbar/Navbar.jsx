import React, { useEffect, useState } from "react";
import './Navbar.css';

import favicon from "../../assets/img/fav/favicon.png";
import { Link, useNavigate } from "react-router";

const Navbar = ({ user }) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const scrollHandler = () => {
      const getscrolltop = window.scrollY || document.documentElement.scrollTop;
      setScrolled(getscrolltop >= 50);
    };

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);


  return (
    <>
      {/* Start  Nav Bar */}
      <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? '' : 'scrolleds'}`}>
        <a href="index.html" className="navbar-brand text-light mx-lg-5 ">
          <img src={favicon} width="70px" alt="favicon" />
          <span className="h2 fw-bold mx-2">Golden <span className="h3">Hotel</span></span>
        </a>

        <button type="button" className={`navbar-toggler  ${open ? 'crossxs' : ''}`} data-bs-toggle="collapse" data-bs-target="#nav" onClick={() => setOpen(!open)}>
          <div className="bg-light lines1"></div>
          <div className="bg-light lines2"></div>
          <div className="bg-light lines3"></div>
        </button>

        <div id="nav" className={`navbar-collapse collapse justify-content-end text-uppercase fw-bold ${open ? 'show' : ''}`}>
          <ul className="navbar-nav align-items-md-center">
            <li className="navbar-item"><Link to="/" className="nav-link mx-2 menuitems">Home</Link></li>
            <li className="navbar-item"><Link to="/rooms" className="nav-link mx-2 menuitems">Explore</Link></li>
            <li className="navbar-item"><Link to="/services" className="nav-link mx-2 menuitems">Services</Link></li>
            <li className="navbar-item"><Link to="/dining" className="nav-link mx-2 menuitems">Dining</Link></li>
            <li className="navbar-item"><Link to="/reservation" className="nav-link mx-2 menuitems">Reservation</Link></li>
            <li className="navbar-item"><Link to="/contact" className="nav-link mx-2 menuitems">Contact</Link></li>
            <li className="navbar-item">
              <div className="nav-link mx-2 menuitems">
                {user ? (<button className="btn btn-outline-light" onClick={()=>navigate('/my-account/user-info')}>Profile</button>) : (<button className="btn btn-outline-light" onClick={()=>navigate('/signin')}>Login</button>)}
              </div>
            </li>
          </ul>
        </div>
      </nav>
      {/* End Nav Bar */}
    </>
  );
};

export default Navbar;
