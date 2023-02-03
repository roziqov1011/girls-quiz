import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import './Modal.scss'
function Modal({ resultFun }) {
  const navigate = useNavigate()
  const moConRef = useRef()
  
  const addMyClass = () => {
    resultFun()
    moConRef.current.classList.remove('out')
    moConRef.current.classList.add('one')
    document.querySelector('.body').classList.add('modal-active')
  }
  const removeMyClass = () => {
    navigate('/')
    moConRef.current.classList.add('out')
    document.querySelector('.body').classList.remove('modal-active')
  }
  return (
    <div>
      <div ref={moConRef} id="modal-container" className='' onClick={removeMyClass}>
        <div className="modal-background">
          <div className="modal">
            <h2>Test topshirgangiz uchun rahmat</h2>
            <p>Testlar yuborildi va saqlandi</p>
            <svg className="modal-svg" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="none">
              <rect x="0" y="0" fill="none" width="226" height="162" rx="3" ry="3"></rect>
            </svg>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="buttons">
          <div id="one" className="button" onClick={() => addMyClass()} >Yakunlash</div>
          
        </div>
      </div>
    </div>
  )
}

export default Modal