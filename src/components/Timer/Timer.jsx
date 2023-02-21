import React, { useEffect, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useDispatch, useSelector } from "react-redux";
import './Timer.scss'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const timerProps = {
  isPlaying: true,
  size: 120,
  strokeWidth: 6
};

const renderTime = (dimension, time) => {
  return (
    <div className="time-wrapper">
      <div className="time">{time}</div>
      <div>{dimension}</div>
    </div>
  );
};


// const getTimeDays = (time) => (time / daySeconds) | 0;

export default function Timer({ endState }) {
  
  const selector = useSelector((state) => state)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [sec, setSec] = useState(0)
  const [min, setMin] = useState(0)
  const [hou, setHou] = useState(0)

  

  const getTimeSeconds = (time) => { setSec((minuteSeconds - time) | 0); return (minuteSeconds - time) | 0};
  const getTimeMinutes = (time) => { setMin(((time % hourSeconds) / minuteSeconds) | 0); return ((time % hourSeconds) / minuteSeconds) | 0};
  const getTimeHours = (time) => { setHou(((time % daySeconds) / hourSeconds) | 0);  return ((time % daySeconds) / hourSeconds) | 0};


  const remainingTime = selector.variants[0].time * 60;
  // const remainingTime = 0.1 * 60;
  
  useEffect(() => {
    if (hou == 0 && min == 0 && sec == 59) {
      toast.warn('Vaqt 1 daqiqa qoldi Yakunlash tugmasini bosing', {
        position: "top-left",
        autoClose: 60000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
      }
    
      if (hou == 0 && min == 0 && sec == 1) {
        dispatch({ type: 'FINISH', payload: { 'timeFinish': true } });
        console.log('manaman');
        endState(true)
      }
      
  }, [sec])


  return (
    <div className="timer">
      
      <ToastContainer
      position="top-left"
      autoClose={60000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss={false}
      draggable
      pauseOnHover={false}
      theme="dark"
      />
      {/* <CountdownCircleTimer
        {...timerProps}
        colors="#7E2E84"
        duration={daysDuration}
        initialRemainingTime={remainingTime}
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>
            {renderTime("days", getTimeDays(daysDuration - elapsedTime))}
          </span>
        )}
      </CountdownCircleTimer> */}
      <CountdownCircleTimer
        {...timerProps}
        colors="#D14081"
        duration={daySeconds}
        initialRemainingTime={remainingTime % daySeconds}
        onComplete={(totalElapsedTime) => ({
          shouldRepeat: remainingTime - totalElapsedTime > hourSeconds
        })}
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>
            {renderTime("hours", getTimeHours(daySeconds - elapsedTime))}
          </span>
        )}
      </CountdownCircleTimer>
      <CountdownCircleTimer
        {...timerProps}
        colors="#0338f8"
        duration={hourSeconds}
        initialRemainingTime={remainingTime % hourSeconds}
        onComplete={(totalElapsedTime) => ({
          shouldRepeat: remainingTime - totalElapsedTime > minuteSeconds
        })}
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>
            {renderTime("minutes", getTimeMinutes(hourSeconds - elapsedTime))}
          </span>
        )}
      </CountdownCircleTimer>
      <CountdownCircleTimer
        {...timerProps}
        colors="#218380"
        duration={minuteSeconds}
        initialRemainingTime={remainingTime % minuteSeconds}
        onComplete={(totalElapsedTime) => ({
          shouldRepeat: remainingTime - totalElapsedTime > 0
        })}
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>
            {renderTime("seconds", getTimeSeconds(elapsedTime))}
          </span>
        )}
      </CountdownCircleTimer>
    </div>
  );
}
