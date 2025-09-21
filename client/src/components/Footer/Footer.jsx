import React from 'react'
import "./Footer.css"
import favicon from "../../assets/img/fav/favicon.png";

const Footer = () => {
  return (
    <footer className="footer-32892 pb-0">
      <div className="site-section">
        <div className="container">
          <div className="row">

            <div className="col-md pr-md-5 mb-4 mb-md-0">
              <h3>About Us</h3>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam itaque unde facere repellendus, 
                odio et iste voluptatum aspernatur ratione mollitia tempora eligendi maxime est, blanditiis accusamus.
              </p>
              <ul className="list-unstyled quick-info mb-4">
                <li>
                  <a href="#" className="d-flex align-items-center">
                    <span className="icon mr-3 icon-phone"></span> +1 291 3912 329
                  </a>
                </li>
                <li>
                  <a href="#" className="d-flex align-items-center">
                    <span className="icon mr-3 icon-envelope"></span> info@example.com
                  </a>
                </li>
              </ul>

              <form action="#" className="subscribe">
                <input type="text" className="form-control" placeholder="Enter your e-mail" />
                <input type="submit" className="btn btn-submit" value="Send" />
              </form>
            </div>

            <div className="col-md mb-4 mb-md-0">
              <h3>Latest Tweet</h3>
              <ul className="list-unstyled tweets">
                <li className="d-flex">
                  <div className="mr-4"><span className="icon icon-twitter"></span></div>
                  <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                </li>
                <li className="d-flex">
                  <div className="mr-4"><span className="icon icon-twitter"></span></div>
                  <div>Facere unde omnis veniam porro excepturi.</div>
                </li>
                <li className="d-flex">
                  <div className="mr-4"><span className="icon icon-twitter"></span></div>
                  <div>Doloribus blanditiis vero delectus ad velit.</div>
                </li>
              </ul>
            </div>

            <div className="col-md-3 mb-4 mb-md-0">
              <h3>Instagram</h3>
              <p>No Instagram images yet.</p>
            </div>
            
            <div className="col-12">
              <div className="d-md-flex justify-content-between align-items-center py-5 footer-menu-wrap d-md-flex align-items-center">
                <ul className="list-unstyled footer-menu mr-auto">
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Our works</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Contacts</a></li>
                </ul>
                <div className="site-logo-wrap ml-auto">
                  <a href="index.html" className="navbar-brand text-light mx-lg-5 ">
                    <img src={favicon} width="40px" alt="favicon" />
                    <span className="h4 fw-bold mx-2">Golden <span className="h3">Hotel</span></span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
