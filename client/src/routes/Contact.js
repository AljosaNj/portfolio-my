import React from "react";
import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";
import HeroImg2 from "../components/HeroImg2";


import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div>
      <Navbar/>
    <HeroImg2  heading="Contact US" text="Do you have any question for me?  Contact me!" />
      <ContactForm/>
      <Footer/>
    </div>
  ) 
};

export default Contact;
//<HeroImg2  heading="CONTACT." text="Lets have a chat" />