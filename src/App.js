import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './component/routePage/Login';
import Header from "./component/Header"
import Main from './component/routePage/Main';
import IdSearch from './component/routePage/IdSearch';
import PwSearch from './component/routePage/PwSearch';
import JoinMem from './component/routePage/JoinMem';
import ThemeChange from './component/ThemeChange';
import Write from './component/Write';
import PostWrite from './component/routePage/PostWrite';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    fetch("http://localhost:4000/api")
      .then(res => res.json())
      .then(data => console.log(data));
  })

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/IdSearch' element={<IdSearch />} />
        <Route path='/PwSearch' element={<PwSearch />} />
        <Route path='/JoinMem' element={<JoinMem />} />
        <Route path='/PostWrite' element={<PostWrite />} />
      </Routes>
      <ThemeChange />
      <Write />
    </div>
  );
}

export default App;
