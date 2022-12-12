import React from 'react'

function Skills({skills}) {

  const listItems = skills.map((skill) => {
    return (
      <li key={skill}>
      <div className='skill-item'>{skill}</div>
      <button className='remove-list-item' onClick={() => "remove item"}>X</button>
      </li>
    )
  })
  return (
    <div className='cv-skills'>
        <div className='skills-header'>Skills</div>
        {listItems}
    </div>
  )
}

export default Skills