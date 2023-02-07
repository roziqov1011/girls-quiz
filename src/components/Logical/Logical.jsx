import React, { useEffect, useState } from 'react'
import './Logical.scss'

const myData = [
  {
    id: 1,
    course_id:1,
    query: '<p>djsahdasj</p>',
  },
  {
    id: 2,
    course_id:2,
    query: '<p>sdsadasdasdsa</p>',
  },
  {
    id: 3,
    course_id:3,
    query: '<p>sdsadasdasdsa</p>',
  },
]

const logicStep = myData.map((item) => (
  {
    id: item.id,
    answer: ''
  }
  ))
function Logical({ data }) {
  const [count, setCount] = useState(0)
  console.log(data);
  useEffect(() => {
  
  }, )


  const getLogicAnswer = (e) => {
    e.preventDefault()
    console.log(e.target.id);
    
    logicStep.find((item)=> item.id == e.target.id).answer = e.target.logicAnswer.value
    console.log(e.target.logicAnswer.value);
    console.log(logicStep);

  }
  
  return (
    <div className='logical'>
      <h2>Logical</h2>

      <div className="lStep__wrapper">
        <h3>fan turi</h3>
        <ul className='test__step__list'>
            {
              logicStep && logicStep.map((item, index) => (
                <li key={index} className={item.answer.length > 0 ? 'test__step__active' : 'test__step__item'}>{index}</li>
              ))
            }

          </ul>
      </div>
      <ul className='logical__list'>
        {
          myData && myData.map((item, index) => (
            <li key={index} className='logical__item'>
              <span dangerouslySetInnerHTML = {{ __html:`<b>${item.id} </b>. ` + item.query }}></span>
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