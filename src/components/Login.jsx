import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './Login.scss'

function Login() {
  const [val, setVal ] = useState('') 
  const navigate = useNavigate()
  const selector = useDispatch()
  console.log();
  if (val.match(/[a-z, A-Z]/g) == null) {
    console.log('ok');
  } else {
  console.log(false);
  }
  
  const dipach = useSelector((state)=> state)
  console.log(dipach.variants);
  const userInfo = (e) => {
    e.preventDefault()
    console.log(dipach);
    navigate('/main-test')
    let val =  e.target.elements
    selector({type: 'INFO', payload: {'fullName': val.fullName.value, 'phone': val.phone.value}});
  }
  return (
    <div className='login'>
      <h3>Ro'yxatdan o'tish</h3>
      <form action="#" onSubmit={userInfo} className='form'>
        <input type="text" placeholder='F.I.Sh' required name='fullName'/>
        <p className={val.match(/[a-z, A-Z]/g) ? 'warning_active': 'warning_diseble'}>!Faqat raqam kiriting</p>
        {/* <p className={val.length != 13 ? 'warning_active1': 'warning_diseble'}>Tel raqam notog'ri kiritildi</p> */}
        <input type="tel" onChange={(e) => setVal(e.target.value)} placeholder='+998__ ___ __ __' defaultValue='+998' required name='phone' />
        <button type='submit'>Yuborish</button>
      </form>
    </div>
  )
}

export default Login