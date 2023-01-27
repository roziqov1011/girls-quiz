import React from 'react'
import './Category.scss'
import threeD from '../assets/img/3d.png'
import frontend from '../assets/img/frontend.png'
import backend from '../assets/img/backend.png'
import uiux from '../assets/img/ui-ux.png'
import { useNavigate } from 'react-router-dom'
const data = [
  {
    id: 1,
    title: '3D Interior & Exterior',
    img: threeD
  },
  {
    id: 2,
    title: 'Frontend',
    img: frontend
  },
  {
    id: 3,
    title: 'Backend',
    img: backend
  },
  {
    id: 4,
    title: 'UX UI Design',
    img: uiux
  },
  {
    id: 5,
    title: 'Graphic design',
    img: threeD
  },
  {
    id: 6,
    title: 'HR',
    img: frontend
  },
  {
    id: 7,
    title: 'SMM',
    img: backend
  },
  {
    id: 8,
    title: 'Logistika',
    img: uiux
  },

]
function Category() {
  const navigate = useNavigate()
  const categoryHandler = () => {
    navigate('/login')
  }
return (
<div className='category'>
  <h2>Yonalish tanlang</h2>
    <ul className="category__list">
      {
        data && data.map(({id, title, img}) => (
          <li onClick={categoryHandler} key={id} className='category__item'>
            <img src={img} alt="" />
            <p>{title}</p>
            <div className="shadow"></div>
          </li>
          ))
      }
      
    


  </ul>

</div>
)
}

export default Category