import React, { useEffect, useRef, useState } from 'react'
import './Timer.scss'

const count = 1000
function Timer() {
  const resHou =useRef()
  const resMin =useRef()
  const resSec =useRef()
  let long = 60;
  let minLong = 130
  // const [hours, setHours ]=useState(0)
  // const [minut, setMinut ]=useState(0)
  // const [secund, setSecund ]=useState(0)
  
    const staticHours = Math.floor((minLong / 60));
    const staticMinutes = Math.floor((minLong % 60 ));
  function timer(time) {
    const hours = Math.floor((time / 60));
    const minutes = Math.floor((time % 60 ));
  
  
    resHou.current.innerHTML = hours
    resMin.current.innerHTML = minutes
  
  }


  // useEffect(()=>{
  // console.log('ok');
  // },[long])
  
  
  
  

  const intervalSecund = setInterval(() => {
    secundRemove()
    timer(minLong)
  }, 1000)


  const intervalTimer = setInterval(() => {
    minLong = minLong-1
    timer(minLong)
  }, 1000 * 60)

  function secundRemove() {
    if (long > 0) {
      long = long - 1
    } else {
      long = 60
    }
    
    resSec.current.innerHTML = long
    if (minLong == 0) {
      clearInterval(intervalTimer)
    }
    if (minLong == 0 && long == 0) {
      clearInterval(intervalSecund)
    }
  }
  
  
  
  
  



  return (
    <div>
        <div className='main__test__time'>
        <span ref={resHou} className="hours">0</span>
        <p>:</p> 
        <span ref={resMin} className="minut">0</span>
        <p>:</p> 
        <span ref={resSec} className="secund">0</span>
        </div>
    </div>
  )
}

export default Timer