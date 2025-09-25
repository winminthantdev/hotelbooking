import React from "react";

import Header from '../components/Header';
import Navbar from '../components/Navbar';

import Welcome from "../components/Welcome";

const HomePage = ()=>{
  return(
    <>
      <Header />
      <Navbar />
      <Welcome />
      
    </>
  )
};

export default HomePage;