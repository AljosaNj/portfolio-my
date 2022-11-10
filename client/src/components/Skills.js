import React from 'react'
import './Skills.css'



const Skills = () => {
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



  return (
    <section className='skills' id='skills'>
      <h2 className='section__title  skilltitle' >Tech Skills</h2>
      
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
    </section>
  )
}

export default Skills