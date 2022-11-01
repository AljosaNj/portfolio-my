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
                            <h1 className="about__heading">About Me</h1>
                            <div className="about__meta">
                            <p className="about__text p__color">
              For instance, whenever I go back to the guest house during
              the morning to copy out the contract, these gentlemen are always
              still sitting there eating their breakfasts. I ought to just try 
              that with my boss; I'd get kicked out on the spot.
              </p>
              <p className="about__text p__color">
              But who knows, maybe that would be the best thing for me. He'd fall 
              right off his desk! And it's a funny sort of business to be sitting up 
              there at your desk, 
              </p>
              <p className="about__text p__color">
              talking down at your subordinates. I ought to just try 
              that witht my boss; I'd get kicked out on the spot. 
              But who knows, maybe that would be the best thing for me. 
              He'd fall right off his desk! And it's a funny sort of 
              business to be sitting up there at your desk, talking down at your subordinates.
              </p>
              <div className="about__button d__flex align__items__center">
                    <a href='ass'>
                        <button  className="btn"  >Download CV</button>
                    </a>
      
                 </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>



  )
}

export default AboutMe