import React, { useState } from 'react';
import './App.css';

function App() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <>
      <div className="header">
        <div className="comp">
          <img
            src="./superbill-blue.png"
            alt="superbill"
            className="complogo"
          />
          <div className="compname">SuperBill</div>
        </div>
        <div className="links">
          <div className="link">Home</div>
          <div className="link">Get Bills</div>
          <div className="link">About Us</div>
          <div className="link">Features</div>
          <div className="link">FAQ's</div>
          <div className="link">Contact</div>
        </div>
        <div className="buttons">
          <div className="loginbutton">Login</div>
          <div className="registerbutton">
            Register{' '}
            <img
              src="/arrow-down-blue.png"
              alt="Arrow"
              className="arrow-down-blue"
            />
          </div>
        </div>
        <div className="menuicon" onClick={toggleMenu}>
          <img src="/menuicon.png" alt="Menu icon" className="menuiconimg" />
        </div>
      </div>

      {/* Sidebar menu */}
      <div className={`menudiv ${menuVisible ? 'visible' : ''}`}>
        <div className={`menupage ${menuVisible ? 'visible' : ''}`}>
          <div className="closebtn" onClick={toggleMenu}>
            &times; {/* Cross Icon */}
          </div>
          <div className="menu-links">
            <div className="menu-link">Home</div>
            <div className="menu-link">Get Bills</div>
            <div className="menu-link">About Us</div>
            <div className="menu-link">Features</div>
            <div className="menu-link">FAQ's</div>
            <div className="menu-link">Contact</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
