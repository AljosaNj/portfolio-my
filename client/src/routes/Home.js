import React from "react";
import Navbar from "../components/Navbar";
import HeroImg from "../components/HeroImg";
import Skills from "../components/Skills";
import Portfolio from "../components/Portfolio"
import MernProject from "../components/MernProject";
import Footer from "../components/Footer";
const Home = () => {
  return (
<div>
<Navbar/>
<HeroImg/>
<Skills/>
<Portfolio/>
<MernProject />
<Footer/>
  </div>
  ) 
};

export default Home;
