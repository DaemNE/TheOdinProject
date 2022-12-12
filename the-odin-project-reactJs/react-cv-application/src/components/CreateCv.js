import React from 'react'
import CreatePersonalInformation from './CreatePersonalInformation'
import CreateSkills from './CreateSkills'
import CreateExperience from './CreateExperience'
import CreateEducation from './CreateEducation'

function CreateCv({setName, setTitle, setAdress, setPhoneNumber, setEmail, setSkills, skills}) {
  return (
    <div className='create-cv'>
      <CreatePersonalInformation 
          setName={setName}
          setTitle={setTitle}
          setAdress={setAdress}
          setPhoneNumber={setPhoneNumber}
          setEmail={setEmail}
      />
      <CreateSkills setSkills={setSkills} skills={skills}/>
      <CreateExperience />
      <CreateEducation />
    </div>
  )
}

export default CreateCv