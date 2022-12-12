import React from 'react'
import Heading from './Heading'
import Skills from './Skills'
import Experience from './Experience'
import Education from './Education'
import Languages from './Languages'
import Projects from './Projects'

function DisplayCv({name, title, adress, phoneNumber, email, skills}) {
  return (
    <div className='display-cv'>
        <Heading 
          name={name}
          title={title}
          adress={adress}
          phoneNumber={phoneNumber}
          email={email}
        />
        <Skills skills={skills}/>
        <Experience />
        <Education />
        <Languages />
        <Projects />
    </div>
  )
}

export default DisplayCv