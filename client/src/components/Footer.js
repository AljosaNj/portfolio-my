import "./FooterStyles.css";
import React from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaHome,
  FaTwitter
} from "react-icons/fa";

const Footer = () => {
  return (
 <div className="footer">
<div className="footer-container">
  <div className="left">
    <div className="location">
     <FaHome size={20} style={{color: "#fff",marginRight: "2rem"}}/>
     <div>
       <p>Banja Luka 78000</p>
     
     </div>
    </div>
    <div className="phone">
      <h4>
       <FaPhone size={20} style={{color: "#fff",marginRight: "2rem"}}/>
               <a  href='aljosa-njezic.pdf' download='aljosa-njezic.pdf' >
              find in  <span style={{color:"yellow"}}>CV</span>
               </a>
               
                  
                 
                   
      </h4>

    </div>
    <div className="email">
      <h4>
       <FaMailBulk size={20} style={{color: "#fff",marginRight: "2rem"}}/>
        aljosaa.njezic@gmail.com
      </h4>

    </div>
  </div>
  <div className="right">
  <h4>About the  Website</h4>
 <p>
            This is me Fahimul kabir. CEO & Founder of Tech2etc. I enjoy
            discussing new projects and design challenges.
          </p>
          <div className="social">
            <FaFacebook
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaTwitter
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaLinkedin
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
          </div>

  </div>

</div>

  </div>
  )
};

export default Footer;
