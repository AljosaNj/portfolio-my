import "./AboutContentStyles.css";

import React from "react";
import { Link } from "react-router-dom";

import React1 from "../assets/cover44.jpg"
import React2 from "../assets/cover55.jpg"


const AboutContent = () => {
  return (
  <div className="about">
  <div className="left">
  <h1>Who Am I?</h1>
  <p>Im a react front-end developer. i create resoponsive secure webiste for my clinents...
    Im a react front-end developer. i create resoponsive secure webiste for my clinents...
    Im a react front-end developer. i create resoponsive secure webiste for my clinents...
    Im a react front-end developer. i create resoponsive secure webiste for my clinents...
  </p>
  <Link to="/contact">
    <button className="btn">Contact</button>
  </Link>
  </div>
  <div className="right">
    <div className="img-container">
       <div className="img-stack top">
        <img src={React1} className="imgabout" alt="true"/>
       </div>
        <div className="img-stack bottom">
        <img src={React2} className="imgabout" alt="true"/>
       </div>
    </div>
  </div>
  
  </div>
  
  
  )
};

export default AboutContent;
