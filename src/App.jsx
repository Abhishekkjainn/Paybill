import React, { useState } from 'react';
import './App.css';
import Header from './components/header';
import Page6 from './pages/page6';
import Footer from './components/footer';
import Home from './homepage';

function App() {
  return (
    <>
      <Header />
      <Home />
      <Page6 />
      <Footer />
    </>
  );
}

export default App;
