import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
const logicResult = []
const logicData = []
function Logical({ data }) {
  // console.log(data);
  const logicStep = data.map((item) => (
    {
      id: item.id,
      answer: ''
    }
  ))
  const selector = useSelector((state) => state)
  const dispatch = useDispatch()
  const [count, setCount] = useState(0)
  const [step, setStep] = useState([])
  useEffect(() => {
    setStep(logicStep);
  }, [count])


 
  const getLogicAnswer = (e) => {
    e.preventDefault()
    let obj = {id: e.target.id, answer: e.target.value}
    logicStep.find((item)=> item.id == e.target.id).answer = e.target.value
    setStep(logicStep);
    
    if (logicResult.find((i) => i.id == obj.id)) {
      logicResult.find((i) => i.id == obj.id).answer = obj.answer
    } else {
      logicResult.push(obj)
    }
    dispatch({ type: 'LOGIC', payload: { 'logic': logicResult } });
    
  
  }
  
  return (
    <div className='logical'>
      <h2>Logical and DC</h2>

      <div className="lStep__wrapper">
        <h3>Logical and DC (2.1)</h3>
        {/* <ul className='test__step__list'>
            {
              step && step.map((item, index) => (
                <li key={index} className={item.answer.length > 0 ? 'test__step__active' : 'test__step__item'}>{index}</li>
              ))
            }

          </ul> */}
      </div>
      <ul className='logical__list'>
        {
          data && data.map((item, index) => (
            <li key={index} className='logical__item'>
              <span dangerouslySetInnerHTML = {{ __html:`<b>${index + 1 } </b>. ` + item.query }}></span>
              <form  action="#" >
                <textarea id={ item.id} onChange={getLogicAnswer} name='logicAnswer'   placeholder='Javobingizni kiriting' >
                
                </textarea>
              </form>
            </li>
            ))
        }
      </ul>
    </div>
  )
}

export default Logical