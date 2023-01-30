import React from "react";
import Navbar from "../components/Navbar";
import HeroImg2 from "../components/HeroImg2";

import Portfolio from "../components/Portfolio"
import MernProject from "../components/MernProject";
import Footer from "../components/Footer";

const Project = () => {
  return (
    <div>
      <Navbar/>
     <HeroImg2  heading="PROJECTS."  text=" Some of my most recent works"  />
     <Portfolio/>
     <MernProject />
      <Footer/>
    </div>
  ) 
};

export default Project;
 //<HeroImg2 heading="PROJECTS."  text=" Some of my most recent works"/>