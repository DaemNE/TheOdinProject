import React from 'react'

/* export function Greet(props) {
    return <h1>Hello, {props.name}</h1>
}
 */

const Greet = (props) => {
    const {name, heroName} = props
    return  (
        <div>
            <h1>
                Hello, {name} a.k.a. {heroName}
            </h1>
        </div>
    )
}

export default Greet