import React from "react";
import Navbar from "../components/Navbar";
import HeroImg from "../components/HeroImg";
import LogoLang from "../components/LogoLang";
import Portfolio from "../components/Portfolio"
import Footer from "../components/Footer";
const Home = () => {
  return (
<div>
<Navbar/>
<HeroImg/>
<LogoLang/>
<Portfolio/>
<Footer/>
  </div>
  ) 
};

export default Home;
