import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import './Logical.scss'

// const myData = [
//   {
//     id: 1,
//     course_id:1,
//     query: '<p>djsahdasj</p>',
//   },
//   {
//     id: 2,
//     course_id:2,
//     query: '<p>sdsadasdasdsa</p>',
//   },
//   {
//     id: 3,
//     course_id:3,
//     query: '<p>sdsadasdasdsa</p>',
//   },
// ]

// const logicStep = myData.map((item) => (
//   {
//     id: item.id,
//     answer: ''
//   }
//   ))
function Logical({ data }) {
  const logicStep = data.map((item) => (
    {
      id: item.id,
      answer: ''
    }
    ))
  const dispatch = useDispatch()
  const [count, setCount] = useState(0)
  const [step, setStep] = useState([])
  useEffect(() => {
    setStep(logicStep);
  }, [count])


  const getLogicAnswer = (e) => {
    e.preventDefault()
    setCount(count + 1)
    logicStep.find((item)=> item.id == e.target.id).answer = e.target.logicAnswer.value
    setStep(logicStep);
    dispatch({ type: 'LOGIC', payload: { 'logic': logicStep } });
  }
  
  return (
    <div className='logical'>
      <h2>Logical</h2>

      <div className="lStep__wrapper">
        <h3>Logical (2.1)</h3>
        <ul className='test__step__list'>
            {
              step && step.map((item, index) => (
                <li key={index} className={item.answer.length > 0 ? 'test__step__active' : 'test__step__item'}>{index}</li>
              ))
            }

          </ul>
      </div>
      <ul className='logical__list'>
        {
          data && data.map((item, index) => (
            <li key={index} className='logical__item'>
              <span dangerouslySetInnerHTML = {{ __html:`<b>${index + 1 } </b>. ` + item.query }}></span>
              <form id={ item.id} onSubmit={ getLogicAnswer} action="#" >
                <textarea name='logicAnswer'   placeholder='Javobingizni kiriting' >
                
                </textarea>
                <button type='submit' >Saqlash</button>
              </form>
            </li>
            ))
        }
      </ul>
    </div>
  )
}

export default Logical