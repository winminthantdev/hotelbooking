import React from "react";

import Header from '../components/Header';
import Navbar from '../components/Navbar/Navbar';
import Facility from "../components/Facilities/Facility";

import Welcome from "../components/Welcome";

const HomePage = ()=>{
  return(
    <>
      <Header />
      <Navbar />
      <Welcome />
      <Facility />    
    </>
  )
};

export default HomePage;

