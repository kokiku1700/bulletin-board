import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Login from './component/routePage/Login';
import Header from "./component/Header"
import Main from './component/routePage/Main';
import IdSearch from './component/routePage/IdSearch';
import PwSearch from './component/routePage/PwSearch';
import JoinMem from './component/routePage/JoinMem';
import Success from './component/routePage/Success';
import ThemeChangeBtn from './component/ThemeChangeBtn';
import WriteBtn from './component/WriteBtn';
import PostWrite from './component/routePage/PostWrite';
import PostEdit from './component/routePage/PostEdit';
import Post from './component/routePage/Post';
import My from './component/routePage/My';
import MyPost from './component/routePage/MyPost';

function App() {
  const list = ["전체", "일상", "공부", "취미", "요리", "게임"];
  const [loginStatus, setLoginStatus] = useState(localStorage.length);

  return (
    <div className="App">
      <Header loginStatus={loginStatus} />
      <Routes>
        <Route path='/' element={<Main list={list} />} />
        <Route path='/Login' element={<Login setLoginStatus={setLoginStatus} />} />
        <Route path='/IdSearch' element={<IdSearch />} />
        <Route path='/PwSearch' element={<PwSearch />} />
        <Route path='/JoinMem' element={<JoinMem />} />
        <Route path='/Success' element={<Success />} />
        <Route path='/PostWrite' element={<PostWrite list={list} />} />
        <Route path='/PostEdit/:id' element={<PostEdit list={list} />} />
        <Route path='/Post/:id' element={<Post />} />
        <Route path='/My' element={<My setLoginStatus={setLoginStatus} />} />
        <Route path='/MyPost' element={<MyPost />} />
      </Routes>
      <div className='btnWrap'>
        <WriteBtn />
        <ThemeChangeBtn />
      </div>
    </div>
  );
}

export default App;
