import "./FooterStyles.css";
import React from "react";
import {
  FaGithub,
  FaMailBulk,
  FaPhone,
  FaHome,
  FaViber
} from "react-icons/fa";

const Footer = () => {
  return (
 <div className="footer">
<div className="footer-container">
  <div className="left">
    <div className="location">
     <FaHome size={25} style={{color: "yellow",marginRight: "2rem" }}/>
     <div>
       <p>Banja Luka 78000</p>
     
     </div>
    </div>
    <div className="phone">
      
      <h4>
       <FaPhone size={25} style={{color: "yellow",marginRight: "2rem"}}/>
               <a  href='aljosa-njezic.pdf' download='aljosa-njezic.pdf' >
              find in  <span style={{color:"yellow"}}>CV</span>
               </a>
               
                  
                 
                   
      </h4>

    </div>
    <div className="email">
     
      <h4>
        <FaMailBulk size={28} style={{color: "yellow",marginRight: "2rem"}}/>
        <a href="mailto:aljosaa.njezic@gmail.com" style={{color:"yellow" }} className="emailhref">
                  aljosaa.njezic@gmail.com
                </a>
      </h4>

    </div>
  </div>
  <div className="right">
  <h4>About the  Website</h4>
 <p>
           This is a portfolio website about developer projects
          </p>
          <div className="social">
            <a href="https://github.com/AljosaNj">
          <FaGithub  
              size={30}
              style={{ color: "yellow", marginRight: "1rem" }}
            />

            </a>
           
           
        <a href="viber:/add?number=+38766067147" >
         <FaViber
              size={30}
              style={{ color: "yellow", marginRight: "1rem" }}
            />
        
        </a>
           
          </div>

  </div>

</div>

  </div>
  )
};

export default Footer;
