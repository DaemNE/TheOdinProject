import React from 'react'

function Person({person, key}){
  return (
    <div>
        <h1>
            I am {person.name}. I am {person.age} years old. I know {person.skills}. 
        </h1>
    </div>
  )
}

export default Person
