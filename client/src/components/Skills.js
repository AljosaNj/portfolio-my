import React from 'react'
import './Skills.css'



const Skills = () => {
const skills = [
  
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Git',
  'SASS',
  'Github',
  'Nodejs',
  'Express',
  'MongoDB',
  
]



  return (
    <section className='skills' id='skills'>
      <h2 className='section__title'>Tech Skills</h2>
      <ul className='skills__list'>
        {skills.map((skill) => (
          <li  className='skills__list-item btns btns--plain'>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills