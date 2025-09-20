import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      {/* Start Header Section */}
      <header>
        {/* Start  Nav Bar */}
        <Navbar />
        {/* End Nav Bar */}

        {/* Start Banner */}
        <div className="container-fluid banners">
          <div className="row p-lg-5 m-lg-3">
            <div className="col-lg-6 col-md-12 mb-5">
              <p className="text-light display-1 fw-semibold mb-lg-5 yours">Enlighten <span className="d-flex flex-wrap">Your Destiny</span></p>
              <h3 className="text-light mb-3 bannerheaders">Welcome to<span className="text-warning text-uppercase">Golden Inn</span>Hotel</h3>
              <div className="lines mb-4"></div>
              <p className="text-light mb-lg-5 bannerparagraphs">There are many variations of passages of Lorem Ipsum available,but the majority have suffered alteration in some form, by injected humour</p>

              <div className="d-flex align-items-center">
                <a href="javascript:void(0);" className="text-light btn btn-info btn-md px-5 py-3 me-lg-5">Explore Our Hotel</a>
                <a href="javascript:void(0);" className="text-light btn btn-md">Play Intro Video</a>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 mb-5">
              <form className="bg-light rounded-4 px-5 py-5 formchecks" action="" method="">
                <div className="mb-3">
                  <label htmlFor="checkin" className="form-label fw-200 mb-2">Check In <span className="text-danger">*</span></label>
                  <input type="date" name="checkin" id="checkin" className="form-control  p-3"/>
                </div>

                <div className="mb-3">
                  <label htmlFor="checkout" className="form-label fw-200 mb-2">Check Out <span className="text-danger">*</span></label>
                  <input type="date" name="checkout" id="checkout" className="form-control p-3"/>
                </div>

                <div className="mb-3">
                  <label htmlFor="guest" className="form-label fw-200 mb-2">Guests <span className="text-danger">*</span>
                  </label>
                  <input type="number" name="guest" id="guest" className="form-control p-3"/>
                </div>

                <div className="d-grid">
                  <button type="submit" className="text-light btn btn-info btn-lg p-3">Check Availability</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* End Banner */}
      </header>
      {/* End Header Section */}
    </>
  );
};

export default Header;
