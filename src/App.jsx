import React, { useState} from 'react'
import './App.css'

function App() {

  // const [dots, setDots] = useState([])

  // const handleDotClick = (index) => {
  //   const updatedDots = [...dots]
  //   updatedDots.splice(index, 1)
  //   setDots(updatedDots)
  // }

  // const handleScreenClick = (event) => {
  //   const {clientX, clientY} = event
  //   const dot = { x: clientX, y: clientY}
  //   setDots([...dots, dot])
  // }

  const [ dotCont, setDotCount ] = useState(0)
  const [ undo, setUndo] = useState(true)

  const handleRedoClick = () => {
    setDotCount(dotCont)
  }

  const handleClick = (event) => {
    const { clientX, clientY} = event
    console.log(`clicked: (${clientX}, ${clientY})`);
  }
  
  const handleUndoClick = () => {
    setUndo(false)
  }

  return (
    <div className='App'>
      <div onClick={handleClick}>
        <button onClick={handleRedoClick}>dsadsadsad</button>
        <div className='App2' onClick={handleClick}></div>
      </div>
      <button onClick={handleUndoClick}>dsadsadsad</button>
    </div>
  )
}

export default App

{/* <div className='App' onClick={handleScreenClick}>
<div className='dot-container'>
  {dots.map((dot, index) =>(
    <div 
      className='dot'
      key={index}
      style={{top: dot.y, left: x}}
      onClick={() => handleDotClick(index)}></div>
  ))}
</div>
<button onClick={() => setDots([])}>undo</button>
</div> */}
