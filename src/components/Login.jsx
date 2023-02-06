import React, { useState } from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './Login.scss'
import { http_api } from '../api';

function Login() {
  const [val, setVal] = useState('')
  const navigate = useNavigate()
  const selector = useDispatch()
  if (val.match(/[a-z, A-Z]/g) == null) {
    console.log('ok');
  } else {
    console.log(false);
  }

  axios.get(`${http_api}/course/`)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  const dipach = useSelector((state) => state)
  console.log(dipach.variants);
  const userInfo = (e) => {
    e.preventDefault()
    console.log(dipach);
    navigate('/main-test')
    let val = e.target.elements
    selector({ type: 'INFO', payload: { 'fullName': val.fullName.value, 'phone': val.phone.value } });


    // fetch('http://192.168.1.72:8000/api/registerCandidate/', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     course: dipach.variants[0].category,
    //     name: val.fullName.value,
    //     phone_number: val.phone.value
    //   })
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log(data))
    var formdata = new FormData();
    formdata.append("course", dipach.variants[0].category);
    formdata.append("name", val.fullName.value);
    formdata.append("phone_number", val.phone.value);

    axios.post(`${http_api}/registerCandidate/`, formdata)
      .then(function (response) {
        console.log(response.data.candidate_id.id)
        selector({ type: 'COURSEID', payload: { 'courseId': response.data.candidate_id.id } });;
      })
      .catch(function (error) {
        console.log(error);
      });
    let obj = {
      course: dipach.variants[0].category,
      name: val.fullName.value,
      phone_number: val.phone.value
    }


    console.log(obj)
  }

  // dangerouslySetInnerHTML = {{ __html: e.searchable }}
  return (
    <div className='login'>
      <h3>Ro'yxatdan o'tish</h3>
      <form action="#" onSubmit={userInfo} className='form'>
        <input type="text" placeholder='F.I.Sh' required name='fullName' />
        <p className={val.match(/[a-z, A-Z]/g) ? 'warning_active' : 'warning_diseble'}>!Faqat raqam kiriting</p>
        {/* <p className={val.length != 13 ? 'warning_active1': 'warning_diseble'}>Tel raqam notog'ri kiritildi</p> */}
        <input type="tel" onChange={(e) => setVal(e.target.value)} placeholder='+998__ ___ __ __' defaultValue='+998' required name='phone' />
        <button type='submit'>Yuborish</button>
      </form>
    </div>
  )
}

export default Login