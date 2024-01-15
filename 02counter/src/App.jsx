import { useState } from 'react'

import './App.css'

function App() {

  const [counter, setCounter] = useState(15) //[variable, function/method] (15 is the variable defined for variable "counter")
  // it should be put in the () it can also be boolean = (true), array ([]) an object ({}) etc, (empty) is undefined

  const addValue = () => {
    // setCounter(counter + 1) // setCounter is function used for updating value (counter + 1)

    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
   
    
  }
  const removeValue = () => {
    
    setCounter(counter - 1)
      
  }
  

  return (
    <>
    <h1>React course with hitesh {counter}</h1>
    <h2>Counter value : {counter} </h2>
    <button 
    onClick={addValue}
    >Add value</button> {" "}
    <button
    onClick={removeValue}>Remove value</button>
    <p>footer: {counter}</p>
  
    </>
  )
}

export default App
