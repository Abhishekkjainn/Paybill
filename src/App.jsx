import React, { useState } from 'react';
import './App.css';
import Header from './components/header';
import Page6 from './pages/page6';
import Footer from './components/footer';
import Home from './homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterVendor from './pages/registervendor';
import ViewBills from './pages/viewbills';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterVendor />} />
        <Route path="/viewbills" element={<ViewBills />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
