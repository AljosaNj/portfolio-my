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
                            <h1 className="about__heading">Who am I?</h1>
                            <div className="about__meta">
                            <p className="about__text p__color">
                    Hello, my name is Aljosa Njezic and I'm a Junior  Developer. 
  I'm basing myself on Web Development as a Frontend Developer. 
  I am currently working with the ReactJS(JavaScript library).
  I also know the basics of working in NodeJS and MongoDB.
              </p>
              <p className="about__text p__color">
            My goal is to become a Full Stack Developer(MERN).  
I learned about programming online. On websites such as Udemy, Pluralsight, Youtube and other sites about programming.
I also had experienced programmers as mentors.
              </p>
              <p className="about__text p__color">
            I like challenges and am open to the upcoming stages in the job...
                    You can view my CV.
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