import React from "react";
import Navbar from "../components/Navbar";
import HeroImg2 from "../components/HeroImg2";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2/>

      <Portfolio/>
      <Footer/>
    </div>
  )
};

export default About;
//<HeroImg2 heading="ABOUT." text="Im a friendly Front-End Developer." />