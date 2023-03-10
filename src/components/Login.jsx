import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import './Login.scss'
import { http_api } from '../api';

function Login() {
  const [vall, setVal] = useState('')
  const [invalid, setInvalid] = useState(false)
  const [login, setLogin] = useState(true)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation()
  const selector = useSelector((state) => state)
  useEffect(() => {
    if (!selector.variants[0].category) {
      navigate('/')
    }
  },[location.pathname])


 
  const userInfo = (e) => {
    e.preventDefault()
    
    let val = e.target.elements
    dispatch({ type: 'INFO', payload: { 'fullName': val.fullName.value, 'phone': val.phone.value } });


    let formdata = new FormData();
    formdata.append("course", selector.variants[0].category);
    formdata.append("name", val.fullName.value);
    formdata.append("phone_number", val.phone.value);

    
   
    // console.log(vall.length)
      if (vall.length < 12) {
        setInvalid(true)
        // console.log('ok')
      }
    
    if (vall.length === 12) {
      axios.post(`${http_api}/registerCandidate/`, formdata)
        .then(function (response) {
          // console.log(response?.data?.success);
          if (response?.data?.success == false) {
            dispatch({ type: 'FIND', payload: { 'findUser': true } })
            navigate('/')
          } else {
            dispatch({ type: 'COURSEID', payload: { 'courseId': response?.data?.candidate_id?.id } })
            setTimeout(() => {
              navigate('/main-test')
            },100)
          }
        
      })
      .catch(function (error) {
        // console.log(error);
      });
    }

  }

  // dangerouslySetInnerHTML = {{ __html: e.searchable }}
  return (
    <div className='login'>
      <h3>Ro'yxatdan o'tish</h3>
      <form action="#" onSubmit={userInfo} className='form'>
        <input type="text" placeholder='F.I.Sh' required name='fullName' />
        <p className={vall.length > 12 ?  'warning_active' : 'warning_diseble'}>!Raqam ko'p</p>
        <p className={invalid ?  'warning_active' : 'warning_diseble'}>!Raqam to'liq emas</p>
        {/* <p className={val.length != 13 ? 'warning_active1': 'warning_diseble'}>Tel raqam notog'ri kiritildi</p> */}
        <input className='number' type="number" onChange={(e) => setVal(e.target.value)} placeholder='998__ ___ __ __' defaultValue='998' required name='phone' />
        <button type='submit'>Yuborish</button>
      </form>
    </div>
  )
}

export default Login