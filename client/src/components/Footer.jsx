import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { Link } from "react-router";

import favicon from "../assets/img/fav/favicon.png";

const Footer = ()=>{
  return(
    <>
        {/* Start Footer Section */}
         <section className="py-5 footers">

            <div className="container-lg">

                <div className="row">

                    <div className="col-lg-3 col-md-6 mb-5">
                        <a href="index.html" className="text-light text-lg-start text-nowrap nav-link mb-4">
                            <img src={favicon} width="60px" alt="hotel-golden" />
                            <span className="h3 fw-bold mx-2 footertitles">GoldenInn</span>
                        </a>

                        <ul className="list-unstyled d-flex">
                            <li><a href="javascript:void(0);" className="nav-link footericons"><FontAwesomeIcon icon="fab fa-facebook" className="fa-2x" /></a></li>
                            <li className="ms-3"><a href="javascript:void(0);" className="nav-link footericons"><FontAwesomeIcon icon="fab fa-twitter" className="fa-2x" /></a></li>
                            <li className="ms-3"><a href="javascript:void(0);" className="nav-link footericons"><FontAwesomeIcon icon="fab fa-instagram" className="fa-2x" /></a></li>
                            <li className="ms-3"><a href="javascript:void(0);" className="nav-link footericons"><FontAwesomeIcon icon="fab fa-pinterest" className="fa-2x" /></a></li>
                        </ul>
                    </div>

                    <div className="col-lg-2 col-md-3 mb-5">

                        <h5 className="text-light fw-semibold mb-4">Sitemap</h5>

                        <ul className="list-unstyled">
                            <li className="foottexts"><a href="javascript:void(0);" className="footerlinks">Agency</a></li>
                            <li><a href="javascript:void(0);" className="footerlinks">New Faces</a></li>
                            <li><a href="javascript:void(0);" className="footerlinks">Models</a></li>
                            <li><a href="javascript:void(0);" className="footerlinks">Contact</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-2 col-md-3 mb-5">

                        <h5 className="text-light fw-semibold mb-4">Explore</h5>

                        <ul className="list-unstyled">
                            <li className="foottexts"><a href="javascript:void(0);" className="footerlinks">Style Guide</a></li>
                            <li><a href="javascript:void(0);" className="footerlinks">Career</a></li>
                            <li><a href="javascript:void(0);" className="footerlinks">Help Text</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-5 col-md-7 col-sm-12">
                        <h5 className="text-light fw-semibold mb-4">join our newsletter to stay up-to-date</h5>
                        <p className="text-secondary">Join our subscribers list to get the latest news, update specials offers delivered directly in your inbox.</p>

                        <div className="d-none d-md-block">
                            <div className="form-group mb-4 footerforms">
                                <input type="email" name="email" id="email" className="form-control px-4 py-2 inputs" placeholder="Your Email Address" />
                                <button type="submit" className="btn btn-sm btn-info fw-semibold px-4 py-2 footerbuttons">Subscribe</button>
                            </div>
                        </div>

                        <div className="d-block d-md-none">
                            <div className="card bg-transparent rounded-3 p-4 mb-5">
                                <input type="email" name="email" id="email" className="p-3 mb-3 inputs" placeholder="Your Email Address" />
                                <button type="submit" className="btn btn-sm btn-info text-light py-3">Subscribe</button>
                            </div>
                        </div>
                            
                    </div>

                </div>

                <div className="row text-center text-md-start">
                    <div className="col-md-4 mb-5">
                        <p className="text-light">GoldenInn&copy; <span id="getyear"></span>All rights reversed.</p>
                    </div>
                    <div className="col-md-4 mb-5">
                        <a href="index.html" className="text-light fw-semibold footermails">facebook</a>
                        <span className="text-light">-</span>
                        <a href="index.html" className="text-light fw-semibold footermails">instagram</a>
                    </div>
                    <div className="col-md-4">
                        <p className="text-light">Design by WMT&SMTDeveloper</p>
                    </div>
                </div>

            </div>

         </section>
        {/* End Footer Section */}
    </>
  )
};

export default Footer;