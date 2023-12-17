import React, { useEffect, useRef, useState } from 'react'
import "./App.css"
const App = () => {
  const [time,setTime] = useState(0)
  const [going,setGoing] = useState(true)
  const timer = useRef()

  const formatTime=(time)=>{
    let hour = Math.floor(time/60/60%24)
    let minutes = Math.floor(time/60%60)
    let seconds = Math.floor(time%60)

    hour = hour <10 ?"0"+hour :hour ;
    minutes = minutes <10 ?"0"+minutes :minutes ;
    seconds = seconds <10 ?"0"+seconds :seconds ;
    return `${hour} : ${minutes} : ${seconds} `
  }



  useEffect(() => {
    
    if(going) {
      timer.current = setInterval(()=>{
        setTime(preTime => preTime + 1 )
        },1000)
    }
    return () => {
      clearInterval(timer.current);
    }
  }, [going])
  

  return (
    <div className='App p-5 '>
    <p className='text-pur text-5xl text-purple-700 font-serif'>Stowatch Timer In React 😀</p>
        <br />
      <p className='text-gray-500 text-6xl font-extrabold font-serif '>{formatTime(time)}</p>   
      <br />
      <div className='p-4 bg-gray-600 justify-between rounded-lg text-2xl flex  m-auto w-96 '>
        <button className='text-red-600' onClick={()=>{setTime(0)}}>Restart</button>
        <button className='text-green-500' onClick={()=>{
          if(going){
            clearInterval(timer.currentTime);
          }
          setGoing(!going);
        }}>{going?"Stop":"Resume"}</button>
      </div> 
        </div>
  )
}

export default App