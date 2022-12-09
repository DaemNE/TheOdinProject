import React, {useState} from 'react'

function UseMemoCounterTwo() {
const [count, setCount] = useState(0);

const increment = () => {
    setCount(count + 1)
}

  return (
    <div>
            <button onClick={increment}>Count two - {count} </button>
        </div>
  )
}

export default UseMemoCounterTwo