import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import './Header.scss';
import LoginPage from '../auth/login/LoginPage';


class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      openLogin: false
    };

    this.openLoginWindow = this.openLoginWindow.bind(this);
  }

  openLoginWindow(){
    this.setState({
      openLogin: true
    });
  }

  render() {
    return (
      <div>
      <div className="row" id="top">
        <div className="col-md-6">
          <span id="logo">Be My Paparazzi!</span>
        </div>
        <div className="col-md-6">
          <div className="login-register_area">
            <Link to="register">
              <button>Register</button>
            </Link>
            <Link to="/">
              <button>sign in</button>
            </Link>
          </div>
        </div>
      </div>
        <div>
          <LoginPage/>
        </div>
      </div>
    );

  }
}

export default Header;
