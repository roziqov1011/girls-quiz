import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { http, http_api } from '../../api'
import Lodading from '../../components/Lodading/Lodading'
import Logical from '../../components/Logical/Logical'
import Modal from '../../components/Modal/Modal'
import Timer from '../../components/Timer/Timer'
import { Data } from '../../Lib/data'
import './MainTest.scss'

const answerDara = [

]


function MainTest() {
  const [loadedr, setLoadedr] = useState(true)
  const [endTime, setEndTime] = useState(false)
  setTimeout(() => {
    setLoadedr(false)
  },1500)
  const [courseData, setCourseData] = useState([])
  const [logicData, setLogicData] = useState([])
  const testData = Data.slice(0, courseData.length)
  testData.forEach((item, index) => {
    if (!answerDara.find((k) => k.id == item.id)) {
      answerDara.push({
        id: item.id,
        title: item.title,
        answer: ''
      })
    }
  })
  
  const navigate = useNavigate()
  const location = useLocation().pathname
  const dispatch = useDispatch()
  const [step, setStep] = useState([])
  const [answer, setAnswer] = useState([])
  const [render, setRender] = useState(0)
  const selector = useSelector((state) => state)

  useEffect(() => {
    if (!selector.variants[0].fullName) {
      navigate('/')
    }
  },[location])
  useEffect(() => {
    setAnswer(answerDara)
    setStep(answerDara)
  }, [])
  useEffect(() => {
    console.log('ok');
  }, [render])
  const testItemValue = (e) => {
    if (e.target.checked == true) {
      console.log(e.target.id);
      let finId = e.target.id.split('-')
      answerDara.find((variant) => variant.id == finId[0]).answer = finId[1]
      setAnswer(answerDara)
      setStep(answerDara)
      console.log(step);
      setRender(render + 1)
    }
    dispatch({ type: 'RESULT', payload: { 'result': answer } });
  }

  const row = {
    candidate_id: 1,
    resultData: [
    ]
}
  const testResult = () => {
    row.candidate_id = selector.variants[0].apiCoursId
    selector.variants[0]?.result?.forEach((item, index) => {
      row.resultData.push({id: courseData[index].id, answer: item.answer})
    })
    selector.variants[0]?.logic?.forEach((item, index) => {
      row.resultData.push({id: item.id, answer: item.answer})
    })


    console.log(row);
    fetch(`${http_api}/responseUserAnswer/`, {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(row)
    })
      .then((res) => res.json())
    .then((data)=> console.log(data))
  }
  useEffect(() => {
    axios.get(`${http_api}/question/?candidate_id=${selector.variants[0].apiCoursId}`)
    .then(function (response) {
      setCourseData(response.data.course);
      setLogicData(response.data.logic)
    })
    .catch(function (error) {
      console.log(error);
    });
    
  },[loadedr])
  
  {
  
  }

  useEffect(() => {
    endTime ? window.scrollY = 0 :  window.scrollY = 100
  }, [])

  console.log(courseData);
  return (
    <>
     {
    loadedr ? <Lodading/> : 
    <div className='main__test'>
      <div className="main__test__header">
        <h3 className='main__test__title'>Dasturlash</h3>

        <Timer endState={setEndTime} />
        <div className="test__step">
          <h4>Dastulash (3.1)</h4>
          <ul className='test__step__list'>
            {
              answer && answer.map((item, index) => (
                <li key={index} className={step[index]?.answer.length > 0 ? 'test__step__active' : 'test__step__item'}>{index + 1}</li>
              ))
            }

          </ul>
        </div>
      </div>
      <ul className="test__list">
        {
          testData && testData.map((item, index) => (
            <li key={item.id} className="test__item">
              <p className='test__item__title' dangerouslySetInnerHTML = {{ __html:`${index+1}.`+ courseData[index]?.query.replace('<p><img src="/', `<p><img src="${http}/`) }}></p>
              <form action='#' onClick={testItemValue} className="test__item__inner">
                <span className={step[index]?.answer == item.variant[0] ? 'test__item__variant item__variant__active' : 'test__item__variant'}>
                  <label htmlFor={item.id + '-' + item.variant[0]} dangerouslySetInnerHTML = {{ __html:'a).'+ courseData[index]?.optionA }}></label>
                  <input  id={item.id + '-' + item.variant[0]} type="radio" className='test__variant__input ' name={item.title} />
                </span>
                <span className={step[index]?.answer == item.variant[1] ? 'test__item__variant item__variant__active' : 'test__item__variant'}>
                  <label htmlFor={item.id + '-' + item.variant[1]} dangerouslySetInnerHTML = {{ __html:'b).'+ courseData[index]?.optionB }}></label>
                  <input  id={item.id + '-' + item.variant[1]} type="radio" className='test__variant__input' name={item.title} />
                </span>
                <span className={step[index]?.answer == item.variant[2] ? 'test__item__variant item__variant__active' : 'test__item__variant'}>
                  <label htmlFor={item.id + '-' + item.variant[2]} dangerouslySetInnerHTML = {{ __html:'c).'+ courseData[index]?.optionC }}></label>
                  <input  id={item.id + '-' + item.variant[2]} type="radio" className='test__variant__input' name={item.title} />
                </span>
                <span className={step[index]?.answer == item.variant[3] ? 'test__item__variant item__variant__active' : 'test__item__variant'}>
                  <label htmlFor={item.id + '-' + item.variant[3]} dangerouslySetInnerHTML = {{ __html:'d).'+ courseData[index]?.optionD }}></label>
                  <input  id={item.id + '-' + item.variant[3]} type="radio" className='test__variant__input' name={item.title} />
                </span>
              </form>
            </li>
          ))
        }
      </ul>
            <Logical data={logicData} />
            {
              endTime ? <button onClick={()=> navigate('/')} className="end__time">
              Sizni vaqtingiz tugadi
            </button> :<Modal  resultFun={testResult} />
            }
      
    </div>
    }
    </>
  )
}

export default MainTest