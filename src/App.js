import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './component/Login';
import Header from "./component/Header"
import Main from './component/Main';

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
