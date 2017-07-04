import React, { PropTypes } from 'react';
import './Header.scss';


const Header = () => {
  return (
    <div id="top">
      <span id="logo">Be My Paparazzi!</span>
      <div className="login-register_area">
        <button>Register</button>
        <button>login</button>
      </div>
    </div>
  );
};

export default Header;
