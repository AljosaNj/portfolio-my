import React, { useState } from "react";
import "./NavbarStyles.css";
import {Link} from "react-router-dom";
import { FaBars,FaTimes } from "react-icons/fa";

const Navbar = () => {

const [click, setClick] = useState(false);
 const handleClick = () => setClick(!click);

/*React.useEffect(() => {
   window.addEventListener("scroll", changeColor);
    }, [])

const [color, setcolor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setcolor(true);
    } else {
      setcolor(false);
    }
  };*/
/*const [state,setState] = useState(false);
  useEffect(() => {
 window.addEventListener("scroll",handleScroll)
  },[])
const handleScroll = () => {
        if(window.scrollY > 120) {
            setState(true); 
        } else {
            setState(false);
        }
    }*/

  return (

<div className='header' >
  <Link to="/" >
<h1>Portfolio</h1>
  </Link>
<ul className={click ? "nav-menu active" : "nav-menu"}>
  <li>
    <Link to="/">Home</Link>
  </li>
    <li>
    <Link to="/project">Project</Link>
  </li>
    <li>
    <Link to="/about">About</Link>
  </li>
    <li>
    <Link to="/contact">Contact</Link>
  </li>
</ul>
<div className="hamburger" onClick={handleClick}>
  {click ? (
    <FaTimes size={20} style={{color: "#fff"}}/>
  ): (
    <FaBars size={20} style={{color: "#fff"}}/>
  )}


</div>

</div>

  )
};

export default Navbar;

//className={color ? "header header-bg" : "header"}
