import React from 'react'
import "./AboutMe.css";
import aboutImg from "../assets/aboutpic.jpg"
const AboutMe = () => {
  return (
     <div className="about " id="About">
                <div className="container">
                    <div className="row">
                        <div className="col__2">
                            <img src={aboutImg} alt='' className='about__img' />
                        </div>
                        <div className="col__2">
                            <h1 className="about__heading skilltitle ">Who am I?</h1>
                            <div className="about__meta">
                            <p className="about__text p__color">
                   I'm a junior React developer and I've been learning Front-end web development for the last two years on my own. Some of the resources that I use for learning are platforms like Udemy, Pluralsight, YouTube, w3schools.​com, freeCodeCamp.​org, codepen.​io, 30secondsofcode.​org etc.
              </p>
              <p className="about__text p__color">
                
           Every day I'm working on real projects where I'm applying everything learned so far. I like challenges and I like to learn new things that I can use to solve problems.
              </p>
            
              <div className="about__button d__flex align__items__center">
                    <a  href='aljosa-njezic.pdf' download='aljosa-njezic.pdf'   >
                 <button  className="btn"  >Download CV</button> 
                    </a>
                   {/* <button  className="btn"  >Download CV</button> */}
                 </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>



  )
}

export default AboutMe