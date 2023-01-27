import React, { useEffect, useRef, useState } from 'react'
import Timer from '../../components/Timer/Timer'
import { testData } from '../../Lib/data'
import './MainTest.scss'

const answerDara = [
  
]
testData.forEach((item) => {
  answerDara.push({
    id: item.id,
    title: item.title,
    answer:''
  })
})

function MainTest() {
const [step, setStep] = useState([])
  const [answer, setAnswer] = useState([])
  const [render, setRender] = useState(0)
  useEffect(() => {
    setAnswer(answerDara)
    setStep(answerDara)
  }, [])
  useEffect(() => {
    console.log('ok');
  },[render])
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
  var api = process.env;
  console.log(api);
  return (
    <div className='main__test'>
      <h3 className='main__test__title'>Kimyo</h3>
      
      <Timer/>
      <div className="test__step">
        <h4>Kimyo (3.1)</h4>
        <ul className='test__step__list'>
          {
            answer && answer.map((item, index) => (
              <li key={item.id} className={step[index]?.answer.length > 0 ? 'test__step__active': 'test__step__item'}>{index}</li>
              ))
          }

        </ul>
      </div>
      <ul className="test__list">
        {
          testData && testData.map((item, index) => (
            <li key={item.id} className="test__item">
              <p className='test__item__title'><strong>{ index}</strong>. {item.title}</p>
              <form  action='#' onClick={testItemValue} className="test__item__inner">
                <span className='test__item__variant'>
                  <label htmlFor={item.id + '-' + item.variant[0]}>a){item.variant[0]}</label>
                  <input id={item.id + '-' + item.variant[0]} type="radio"  className='test__variant__input' name={item.title}/>
                </span>
                <span className='test__item__variant'>
                  <label htmlFor={item.id + '-' + item.variant[1]}>b){item.variant[1]}</label>
                  <input id={item.id + '-' + item.variant[1]} type="radio"  className='test__variant__input' name={item.title}/>
                </span>
                <span className='test__item__variant'>
                  <label htmlFor={item.id + '-' + item.variant[2]}>c){item.variant[2]}</label>
                  <input id={item.id + '-' + item.variant[2]} type="radio"  className='test__variant__input' name={item.title}/>
                </span>
                <span className='test__item__variant'>
                  <label htmlFor={item.id + '-' + item.variant[3]}>d){item.variant[3]}</label>
                  <input id={item.id + '-' + item.variant[3]} type="radio"  className='test__variant__input' name={item.title}/>
                </span>
              </form>
            </li>
            ))
        }
      </ul>
    </div>
  )
}

export default MainTest