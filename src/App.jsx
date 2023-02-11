import { Route, Routes } from 'react-router-dom';
import './App.css';
import Category from './components/Category';
import Login from './components/Login';
import Start from './components/Start';
import Home from './pages/Home/Home';
import MainTest from './pages/MainTest/MainTest';
import disableDevtool from'disable-devtool';
let elBody =  document.querySelector('body')
function App() {
  
  // // TODO LOADER TAYYOR FACAT PROJECT TUGAGANDAN KEGIN OCHILADI COMMETAN
  // window.addEventListener('load', function () {
  
  //   elBody.style.overflow = "hidden";
  // })
  // elBody.style.overflow = "auto";


  // // TODO POSMOTRET CODNI OCHIRADIGON FUNCTION
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
      <Routes>
        <Route path='/' element={<Home />} >
          <Route path='' element={<Start/> } />
          <Route path='category' element={<Category/> } />
          <Route path='login' element={<Login/> } />
        </Route>
        <Route path='/main-test' element={<MainTest/> } />
      </Routes>
    </div>
  );
}

export default App;
