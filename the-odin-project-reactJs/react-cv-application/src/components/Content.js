import React, { useState } from 'react'
import CreateCv from './CreateCv'
import DisplayCv from './DisplayCv'

function Content() {

  const [name, setName] = useState("Nikolaas Daem");
  const [title, setTitle] = useState("Front-end web developer");
  const [adress, setAdress] = useState("Hollywood Lane 234, 0001 Earth");
  const [phoneNumber, setPhoneNumber] = useState("(32) 471 03 89 10");
  const [email, setEmail] = useState("NikolaasDaem@example.com");
  const [skills, setSkills] = useState([]);


  return (
    <div className='content'>
        <DisplayCv 
          name={name}
          title={title}
          adress={adress}
          phoneNumber={phoneNumber}
          email={email}
          skills={skills}
        />
        <CreateCv 
          setName={setName}
          setTitle={setTitle}
          setAdress={setAdress}
          setPhoneNumber={setPhoneNumber}
          setEmail={setEmail}
          setSkills={setSkills}
          skills={skills}
        />
    </div>
  )
}

export default Content