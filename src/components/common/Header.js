import React, { PropTypes } from 'react';
import {Link} from 'react-router';
import './Header.scss';


const Header = () => {
  return (
    <div className="row" id="top">
      <div className="col-md-6">
        <span id="logo">Be My Paparazzi!</span>
      </div>
      <div className="col-md-6">
        <div className="login-register_area">
          <button>Register</button>
          <Link to="login"><button>sign in</button></Link>
        </div>
      </div>


    </div>
  );
};

export default Header;
