import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './component/routePage/Login';
import Header from "./component/Header"
import Main from './component/routePage/Main';
import IdSearch from './component/routePage/IdSearch';
import PwSearch from './component/routePage/PwSearch';
import JoinMem from './component/routePage/JoinMem';
import Success from './component/routePage/Success';
import ThemeChange from './component/ThemeChange';
import Write from './component/Write';
import PostWrite from './component/routePage/PostWrite';
import Post from './component/routePage/Post';
import { useState } from 'react';

function App() {
  const [list, setList] = useState([
    "일상", "공부"
  ]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Main list={list} />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/IdSearch' element={<IdSearch />} />
        <Route path='/PwSearch' element={<PwSearch />} />
        <Route path='/JoinMem' element={<JoinMem />} />
        <Route path='/Success' element={<Success />} />
        <Route path='/PostWrite' element={<PostWrite list={list} />} />
        <Route path='/Post' element={<Post />} />
      </Routes>
      <ThemeChange />
      <Write />
    </div>
  );
}

export default App;
