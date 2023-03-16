import React, { useEffect, useState } from 'react'
import './Category.scss'
import threeD from '../assets/img/3d.png'
import frontend from '../assets/img/frontend.png'
import backend from '../assets/img/backend.png'
import uiux from '../assets/img/ui-ux.png'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { http, http_api } from '../api';
import Lodading from './Lodading/Lodading'
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
  const [loader, setLodaer] = useState(true)
  const [courseData, setCourseData] = useState([])

  const selector = useDispatch()
  const navigate = useNavigate()
  const location = useLocation().pathname
  const dipach = useSelector((state) => state)
  useEffect(() => {
    fetch(`${http_api}/active`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.success);
        if (data.success == false) {
          navigate('/')
        }
      })
  },[])


  useEffect(() => {
    fetch(`${http_api}/course/`)
      .then((res) => res.json())
      .then((data) => {
        setCourseData(data)
        //console.log(data);
      })
      .then(() => {
        setLodaer(false)
      })
  },[])
  const categoryHandler = (e, time) => {
    
    // console.log(time);
    selector({type: 'CATEGORY', payload: {'category': e, 'time': time}});
    navigate('/login');
  }
  
return (
  <>
    {
      loader ? <Lodading />:
        
  <div className='category'>
  <h2>Yo'nalish tanlang</h2>
    <ul className="category__list">
      {
        courseData && courseData.map(({id, name, logo, time}) => (
          <li onClick={()=> categoryHandler(id, time)} key={id} className='category__item'>
            <img src={`${http+logo}`} alt="" />
            <p>{name}</p>
            <div className="shadow"></div>
          </li>
          ))
      }
      
    


  </ul>

</div>
    }
  </>
)
}

export default Category