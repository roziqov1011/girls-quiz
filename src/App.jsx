import { Route, Routes, useLocation } from 'react-router-dom';
import './App.scss';
import Category from './components/Category';
import Login from './components/Login';
import Start from './components/Start';
import Home from './pages/Home/Home';
import MainTest from './pages/MainTest/MainTest';
import disableDevtool from'disable-devtool';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
let elBody = document.querySelector('body')

function App() {
  const [update, setUpdate] = useState(0)
  const selector = useSelector((state) => state)
  const location = useLocation().pathname
  useEffect(() => {
    if (selector.variants[0].findUser && location == '/') {
      toast.warn(`Siz test topshirib bo'lgansiz`, {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }
    // if (selector.variants[0].timeFinish && location == '/') {
    //   toast.warn(`Siz testni qatida topshira olmadiz`, {
    //     position: "top-left",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: false,
    //     pauseOnHover: false,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "dark",
    //     });
    // }
  }, [location])


  

  // // // TODO LOADER TAYYOR FACAT PROJECT TUGAGANDAN KEGIN OCHILADI COMMETAN
  // window.addEventListener('load', function () {
  
  //   elBody.style.overflow = "hidden";
  // })
  // elBody.style.overflow = "auto";


  // TODO POSMOTRET CODNI OCHIRADIGON FUNCTION
  // elBody.addEventListener('contextmenu', function (ev) {
  //   ev.preventDefault();
  //   return false;
  // }, false);

  // document.onkeydown = keyboardDown;
  // document.onkeyup = keyboardUp;

  // document.oncontextmenu = function (e) {
  //   var evt = new Object({ keyCode: 93 });
  //   stopEvent(e);
  //   keyboardUp(evt);
  // }
  // function stopEvent(event) {
  //   if (event.preventDefault != undefined)
  //     event.preventDefault();
  //   if (event.stopPropagation != undefined)
  //     event.stopPropagation();
  // }
  // function keyboardDown(event) {
  //   if (event.preventDefault != undefined)
  //     event.preventDefault();
  //   if (event.stopPropagation != undefined)
  //     event.stopPropagation();
  // }
  // function keyboardUp(event) {
  //   if (event.preventDefault != undefined)
  //     event.preventDefault();
  //   if (event.stopPropagation != undefined)
  //     event.stopPropagation();
  // }

  // disableDevtool();
  return (
    <div className="App">
      {
      location == '/'? 
      <ToastContainer
      position="top-left"
      autoClose={60000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss={false}
      draggable
      pauseOnHover={false}
      theme="dark"
      />: null
      }
      
      <Routes>
        <Route path='/' element={<Home />} >
          <Route path='' element={<Start/> } />
          <Route path='category' element={<Category data={{update, setUpdate}} /> } />
          <Route path='login' element={<Login/> } />
        </Route>
        <Route path='/main-test' element={<MainTest/> } />
      </Routes>
    </div>
  );
}

export default App;
