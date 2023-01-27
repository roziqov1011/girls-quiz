import { Route, Routes } from 'react-router-dom';
import './App.css';
import Category from './components/Category';
import Login from './components/Login';
import Start from './components/Start';
import Home from './pages/Home/Home';
import MainTest from './pages/MainTest/MainTest';

function App() {

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
