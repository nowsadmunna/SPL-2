import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import RegVerification from './pages/RegVerification';
import Registration from './pages/Registration';
import LogIn from './pages/LogIn';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/registration_verification" element={<RegVerification/>}/>
        <Route path="/registration" element={<Registration/>}/>
        <Route path="/login" element={<LogIn/>}/>
      </Routes>
    </BrowserRouter>
  )
}
