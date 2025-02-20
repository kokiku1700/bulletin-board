import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './component/Login';
import Header from "./component/Header"
import Main from './component/Main';
import IdSearch from './component/IdSearch';
import PwSearch from './component/PwSearch';
import JoinMem from './component/JoinMem';


function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/IdSearch' element={<IdSearch />} />
        <Route path='/PwSearch' element={<PwSearch />} />
        <Route path='/JoinMem' element={<JoinMem />} />
      </Routes>
    </div>
  );
}

export default App;
