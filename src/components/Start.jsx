import React from 'react'
import './Start.scss'
import logo from '../assets/img/start-logo.png'
import { useNavigate } from 'react-router-dom'

function Start() {
  const navigate = useNavigate()
  const startHandler = () => {
    navigate('/category')
  }
  return (
    <div className='start'>
      <img className='start__logo' src={logo} alt="logo" />
      <p>Digital Girls 2</p>
      <button onClick={startHandler}>Boshlash</button>
    </div>
  )
}

export default Start