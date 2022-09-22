import React from 'react';
import "./Portfolio.css";
import services from './services';

export const Portfolio = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
    <div className='portfolio'>
     
    
     
     {services.map((service) => {
      const {id,imgsrc,title,text,skills,url,url2} = service;
      return (
       <div key={id} className="project-card">
      <img src={imgsrc} alt="image"/>
    <h2 className="project-title">{title}</h2>
    <div className="pro-details">
      <p>{text}</p>
      <p className='skil'>{skills}</p>
      <div className="pro-btns">
     <a href={url}  target="_blank" className="btn" > View</a>
     <a href={url2} target="_blank" className="btn" > Source</a>

      
      </div>

    </div>
    </div>

      )
     })}

    </div>
     </div>
  )
}



export default Portfolio;