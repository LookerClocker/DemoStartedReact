import React, { PropTypes } from 'react';
import {Link} from 'react-router';
import './Header.scss';


const Header = () => {
  return (
    <div id="top">
      <span id="logo">Be My Paparazzi!</span>
      <div className="login-register_area">
        <button>Register</button>
        <Link to="login"><button>sign in</button></Link>
      </div>
    </div>
  );
};

export default Header;
