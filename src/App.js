import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './screens/Home';
import Login from './screens/Login.jsx';
import Register from './screens/Register';
import Subscribe from './screens/Subscribe';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/create-account' element={<Register/>}></Route>
        <Route path='/find-jobs' element={<Register/>}></Route>
        <Route path='/subscribe' element={<Subscribe/>}></Route>
        <Route path='/find-dev' element={<Register/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
