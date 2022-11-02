import "./HeroImgStyles.css";
import React from "react";
import IntroImg from "../assets/heroprogram.jpg"
import { Link } from "react-router-dom";
import Typed from 'react-typed';

const HeroImg = () => {
  return (
  <div className="hero">
    <div className="mask">
   <img className="into-img" src={IntroImg} alt="IntroImg"/>
    </div>

    <div className="content">
  <Typed
  className="animations-p"
       strings={[
        "HI,THIS IS MY PORTFOLIO",
        "YOU CAN SEE SOME OF MY PROJECTS",
        "CONTACT ME IF YOU ARE INTERESTED",
       ]}
       
        typeSpeed={150}
        backSpeed={100}
      
        loop
      
      />


      {/* <p>HI,I`M A FREELANCER</p>*/}
      <h1>React Developer</h1>
      <div>
        <Link to="/project" className="btn">Projects</Link>
         <Link to="/contact" className="btn btn-light">Contact</Link>
      </div>
    </div>
  </div>
  );
};

export default HeroImg;
