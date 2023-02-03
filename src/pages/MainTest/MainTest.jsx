import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import Modal from '../../components/Modal/Modal'
import Timer from '../../components/Timer/Timer'
import { testData } from '../../Lib/data'
import './MainTest.scss'

const answerDara = [

]
testData.forEach((item) => {
  answerDara.push({
    id: item.id,
    title: item.title,
    answer: ''
  })
})

function MainTest() {
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
  console.log(dipach);
  useEffect(() => {
    if (dipach.variants[0].category.length < 1) {
      navigate('/')
    }
  },[location])
  const testResult = () => {
    selector({ type: 'RESULT', payload: { 'result': answer } });
    console.log(dipach.variants);
  }

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
                <li key={item.id} className={step[index]?.answer.length > 0 ? 'test__step__active' : 'test__step__item'}>{index}</li>
              ))
            }

          </ul>
        </div>
      </div>
      <ul className="test__list">
        {
          testData && testData.map((item, index) => (
            <li key={item.id} className="test__item">
              <p className='test__item__title'><strong>{index}</strong>. {item.title}</p>
              <form action='#' onClick={testItemValue} className="test__item__inner">
                <span className={step[index]?.answer == item.variant[0] ? 'test__item__variant item__variant__active' : 'test__item__variant'}>
                  <label htmlFor={item.id + '-' + item.variant[0]}>a) {item.variant[0]}</label>
                  <input  id={item.id + '-' + item.variant[0]} type="radio" className='test__variant__input ' name={item.title} />
                </span>
                <span className={step[index]?.answer == item.variant[1] ? 'test__item__variant item__variant__active' : 'test__item__variant'}>
                  <label htmlFor={item.id + '-' + item.variant[1]}>b) {item.variant[1]}</label>
                  <input  id={item.id + '-' + item.variant[1]} type="radio" className='test__variant__input' name={item.title} />
                </span>
                <span className={step[index]?.answer == item.variant[2] ? 'test__item__variant item__variant__active' : 'test__item__variant'}>
                  <label htmlFor={item.id + '-' + item.variant[2]}>c) {item.variant[2]}</label>
                  <input  id={item.id + '-' + item.variant[2]} type="radio" className='test__variant__input' name={item.title} />
                </span>
                <span className={step[index]?.answer == item.variant[3] ? 'test__item__variant item__variant__active' : 'test__item__variant'}>
                  <label htmlFor={item.id + '-' + item.variant[3]}>d) {item.variant[3]}</label>
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