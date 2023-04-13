import React from 'react';
import './app.scss';
import { Login } from './modules/login/Login';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { Home } from './modules/home/Home';
import { Register } from './modules/register/Register';
import { Prices } from './modules/prices/Prices';
import { Restaurant } from './modules/restaurant/Restaurant';
import { Offers } from './modules/offers/Offers';
import { Profile } from './modules/profile/Profile';
import { Installations } from './modules/installations/Installations';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path='/prices' element={<Prices/>}></Route>
        <Route path='/restaurant' element={<Restaurant/>}></Route>
        <Route path='/offers' element={<Offers/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/installations' element={<Installations/>}></Route>


      </Routes>
    </Router>
  );
}

export default App;
