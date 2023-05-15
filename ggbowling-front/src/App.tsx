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
import { Booking } from './modules/booking/Booking';
import { PrivacyPolicy } from './modules/footer-pages/privacyPolicy/PrivacyPolicy';
import { TermsAndConditions } from './modules/footer-pages/terms&conditions/TermsAndConditions';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/prices" element={<Prices />}></Route>
        <Route path="/restaurant" element={<Restaurant />}></Route>
        <Route path="/offers" element={<Offers />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/installations" element={<Installations />}></Route>
        <Route path="/booking" element={<Booking />}></Route>
        <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
        <Route path="/terms-and-conditions" element={<TermsAndConditions />}></Route>



      </Routes>
    </Router>
  );
}

export default App;
