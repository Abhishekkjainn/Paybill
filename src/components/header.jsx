import React, { useState } from 'react';
import { Link } from 'react-router-dom';
export default function Header() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  return (
    <>
      <div className="header">
        <Link to={'/'} className="comp linktag">
          <img
            src="./superbill-blue.png"
            alt="superbill"
            className="complogo"
          />
          <div className="compname">SuperBill</div>
        </Link>
        <div className="links">
          <Link to={'/'} className="link linktag">
            Home
          </Link>
          <Link to={'/viewbills'} className="link linktag">
            Get Bills
          </Link>
          <div className="link linktag">About Us</div>
          <div className="link linktag">Features</div>
          <div className="link linktag">FAQ's</div>
          <div className="link linktag">Contact</div>
        </div>
        <div className="buttons">
          <div className="loginbutton">Login</div>
          <Link to={'/register'} className="registerbutton linktag">
            Register{' '}
            <img
              src="/arrow-down-blue.png"
              alt="Arrow"
              className="arrow-down-blue"
            />
          </Link>
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
