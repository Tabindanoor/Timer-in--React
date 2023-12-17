import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'

const App = () => {
  const [time, setTime] = useState(0)
  const [going, setGoing] = useState(true) 
  const timer = useRef()
  const format=(time)=>{
    let hour = Math.floor(time/60/60%24);
    let minutes = Math.floor(time/60%60);
    let seconds = Math.floor(time%60);

    hour = hour < 10 ? "0"+hour : hour;
    minutes = minutes < 10 ? "0"+minutes : minutes;
    seconds = seconds < 10 ? "0"+seconds : seconds;
    return `${hour} ":" ${minutes} ":" ${seconds}`
  }
  return (
    <div>
      <p>{format(time)}</p>
        <div>

        </div>
    </div>
  )
}

export default App
