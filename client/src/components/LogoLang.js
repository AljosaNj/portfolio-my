import React from 'react'
import "./LogoLang.css";
import  serviceslogo from '../components/logoserv'

const LogoLang = () => {
  return (
   <div className='work-logo'>
    <div className='logolang'>

     {serviceslogo.map((servicelogo) => {
      const {id,imlog,title} = servicelogo;
      return (
       <div key={id} className="project-logo">
        <img src={imlog} className='imglogo' alt='logo language'/>
         <h2 className='logo-title'>{title}</h2>

       </div>
      )
     })}
    </div>

   </div>
  )
}

export default LogoLang