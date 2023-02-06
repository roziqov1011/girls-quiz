import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { http_api } from '../../api'
import Modal from '../../components/Modal/Modal'
import Timer from '../../components/Timer/Timer'
import { Data } from '../../Lib/data'
import './MainTest.scss'

const answerDara = [

]


function MainTest() {
  const [courseData, setCourseData] = useState([])
  const testData = Data.slice(0, courseData.length)
  testData.forEach((item) => {
    answerDara.push({
      id: item.id,
      title: item.title,
      answer: ''
    })
  })
  console.log(courseData);
  const navigate = useNavigate()
  const location = useLocation().pathname
  const selector = useDispatch()
  const [step, setStep] = useState([])
  const [answer, setAnswer] = useState([])
  const [render, setRender] = useState(0)

  useEffect(() => {
    setAnswer(answerDara)
    setStep(answerDara)
  }, [])
  useEffect(() => {
    console.log('ok');
  }, [render])
  const testItemValue = (e) => {
    if (e.target.checked == true) {
      let finId = e.target.id.split('-')
      answerDara.find((variant) => variant.id == finId[0]).answer = finId[1]
      setAnswer(answerDara)
      setStep(answerDara)
      console.log(step);
      setRender(render + 1)
    }
  }
  const dipach = useSelector((state) => state)
  console.log(dipach.variants[0].apiCoursId);

  // useEffect(() => {
  //   if (dipach.variants[0].category.length < 1) {
  //     navigate('/')
  //   }
  // },[location])
  const testResult = () => {
    selector({ type: 'RESULT', payload: { 'result': answer } });
    console.log(dipach.variants);
  }
  useEffect(() => {
    axios.get(`${http_api}/question?candidate_id=21`)
    .then(function (response) {
      setCourseData(response.data.course);
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  },[])
  console.log(courseData);
  
  return (
    <div className='main__test'>
      <div className="main__test__header">
        <h3 className='main__test__title'>Kimyo</h3>

        <Timer />
        <div className="test__step">
          <h4>Kimyo (3.1)</h4>
          <ul className='test__step__list'>
            {
              answer && answer.map((item, index) => (
                <li key={index} className={step[index]?.answer.length > 0 ? 'test__step__active' : 'test__step__item'}>{index}</li>
              ))
            }

          </ul>
        </div>
      </div>
      <ul className="test__list">
        {
          testData && testData.map((item, index) => (
            <li key={item.id} className="test__item">
              <p className='test__item__title' dangerouslySetInnerHTML = {{ __html:`${index+1}.`+ courseData[0]?.query }}></p>
              <form action='#' onClick={testItemValue} className="test__item__inner">
                <span className={step[index]?.answer == item.variant[0] ? 'test__item__variant item__variant__active' : 'test__item__variant'}>
                  <label htmlFor={item.id + '-' + item.variant[0]} dangerouslySetInnerHTML = {{ __html:'a).'+ courseData[0]?.optionA }}></label>
                  <input  id={item.id + '-' + item.variant[0]} type="radio" className='test__variant__input ' name={item.title} />
                </span>
                <span className={step[index]?.answer == item.variant[1] ? 'test__item__variant item__variant__active' : 'test__item__variant'}>
                  <label htmlFor={item.id + '-' + item.variant[1]} dangerouslySetInnerHTML = {{ __html:'b).'+ courseData[0]?.optionB }}></label>
                  <input  id={item.id + '-' + item.variant[1]} type="radio" className='test__variant__input' name={item.title} />
                </span>
                <span className={step[index]?.answer == item.variant[2] ? 'test__item__variant item__variant__active' : 'test__item__variant'}>
                  <label htmlFor={item.id + '-' + item.variant[2]} dangerouslySetInnerHTML = {{ __html:'c).'+ courseData[0]?.optionC }}></label>
                  <input  id={item.id + '-' + item.variant[2]} type="radio" className='test__variant__input' name={item.title} />
                </span>
                <span className={step[index]?.answer == item.variant[3] ? 'test__item__variant item__variant__active' : 'test__item__variant'}>
                  <label htmlFor={item.id + '-' + item.variant[3]} dangerouslySetInnerHTML = {{ __html:'a).'+ courseData[0]?.optionD }}></label>
                  <input  id={item.id + '-' + item.variant[3]} type="radio" className='test__variant__input' name={item.title} />
                </span>
              </form>
            </li>
          ))
        }
      </ul>
      {/* <button className='test__finsh__btn' onClick={testResult}>Yakunlash</button> */}
      <Modal resultFun={testResult} />
    </div>
  )
}

export default MainTest