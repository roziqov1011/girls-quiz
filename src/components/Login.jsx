import React from 'react'
import './Login.scss'

function Login() {
  return (
    <div className='login'>
      <h3>Ro'yxatdan o'tish</h3>
      <form action="#" className='form'>
        <input type="text" placeholder='F.I.Sh'/>
        <input type="tel" placeholder='+998__ ___ __ __'/>
        <button>Yuborish</button>
      </form>
    </div>
  )
}

export default Login