import {React, useState} from 'react'
import './index.css'

export default function App() {
  const [btn, setBtn]= useState(0);
  const btnClick=()=>{
    setBtn(btn + 1);
  }
  return (
    <div className="main">
      <h1>{btn}</h1>
      <button onClick={btnClick}>Click Me!</button>
    </div>
  )
}

