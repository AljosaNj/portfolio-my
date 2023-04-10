import React from 'react'
import './Skills.css'
import Sphere from './Icons';


const Skills = () => {

 







  return (
    <section className='skills' id='skills'>
      <h2 className='section__title  skilltitle' >Tech Skills</h2>
   <p
        className="paracontainer"
        style={{ marginBottom: "2rem", textAlign: "center" }}
        data-aos="zoom-in-right"
      >
        Below you can see my skills and technologies that I use every day. I am
        trying to keep up with the newest trends in the industry and to keep
        learning new skills and technologies as well as improving knowledge in
        existing ones  .
      </p>



     {/*
     
      <ul className='skills__list'>


      
      {skills.map((skill) => {
         const {id,title} = skill;
           return(
          <li key={id} className='skills__list-item btns btns--plain'>
            {title}
          </li>
        )
})}
      
      
      
      </ul>
     
     */}
      
     
      <Sphere />
    </section>
  )
}

export default Skills


/*
const skills = [
  {
    id: 1,
    title: 'HTML',
   },
    {
    id: 2,
    title: 'CSS',
   },
  {
    id: 3,
    title: 'JavaScript',
   },
  {
    id: 4,
    title: 'React',
   },
   {
    id: 5,
    title: 'Git',
   },
   {
    id: 6,
    title: 'SASS',
   },
    {
    id: 7,
    title: 'Github',
   },
    {
    id: 8,
    title: 'Nodejs',
   },
   {
    id: 9,
    title: 'Express',
   },
    {
    id: 10,
    title: 'MongoDB',
   },
   
]


*/