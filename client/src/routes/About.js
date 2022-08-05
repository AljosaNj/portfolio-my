import React from "react";
import Navbar from "../components/Navbar";
import HeroImg2 from "../components/HeroImg2";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";
import AboutContent from "../components/AboutContent";
const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="ABOUT" text="Im a friendly Front-End Developer."/>
     <AboutContent/>
      <Portfolio/>
      
      <Footer/>
    </div>
  )
};

export default About;
//<HeroImg2 heading="ABOUT." text="Im a friendly Front-End Developer." />