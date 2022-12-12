import React, {useState} from 'react'

function CreateSkills({setSkills, skills}) {

  const [value, setValue] = useState("");

  return (
    <div>
      <div className='create-title'>Skills</div>
      <input type="text" placeholder='React.js' value={value} onChange={(e) => setValue(e.target.value)}/>
      <div className='button-group'>
        <button className='button-add' onClick={() => {
        setSkills(() => 
          [...skills, value]
        )
        console.log(...skills, value)
        console.log(skills)
        }}>Add</button>
        <button className='button-delete'onClick={() => setSkills(() => {
          skills.pop()
          return [...skills]
          })}>Delete</button>
      </div>
    </div>
  )
}

export default CreateSkills