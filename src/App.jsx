// App.js
import React from 'react';
import './App.css'; // Add global styles if needed
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Feedback from './components/Feedback';

import Header from './components/Header';
import Navbar from './components/Navbar';
import SideSection from './components/SideSection';
import MovingHeadline from './components/MovingHeadline';
import Footer from './components/Footer';
import Image from './components/Image';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
  </BrowserRouter>
  );
};

export default App;
