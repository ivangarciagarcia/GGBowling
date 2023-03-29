import React from 'react';
import './app.scss';
import { Login } from './modules/login/Login';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { Home } from './modules/home/Home';
import { Register } from './modules/register/Register';
import { Prices } from './modules/prices/Prices';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path='/prices' element={<Prices/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
