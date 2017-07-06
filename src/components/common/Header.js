import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import './Header.scss';
import LoginPage from '../auth/login/LoginPage';
import RegisterPage from '../auth/register/RegisterPage';


class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showSignInModal: false,
      showRegisterModal: false
    };

    this.openAuthModal = this.openAuthModal.bind(this);
    this.closeAuthModal = this.closeAuthModal.bind(this);
  }

  openAuthModal(event) {
    event.preventDefault();

    if (event.target.id === 'signin-button') {

      this.setState({
        showSignInModal: !this.state.showSignInModal
      });
    }

    else if (event.target.id === 'register-button') {

      this.setState({
        showRegisterModal: !this.state.showRegisterModal
      });
    }

    document.getElementsByClassName('overlay')[0].style.display = 'block';
  }

  closeAuthModal(event) {
    event.preventDefault();

    if (this.state.showSignInModal) {

      this.setState({
        showSignInModal: !this.state.showSignInModal
      });

    } else if (this.state.showRegisterModal) {

      this.setState({
        showRegisterModal: !this.state.showRegisterModal
      });

    }

    document.getElementsByClassName('overlay')[0].style.display = 'none';
  }

  render() {

    document.getElementsByClassName('overlay')[0].onclick = (event) => {
      this.closeAuthModal(event);
    };

    return (
      <div>
        <div className="row" id="top">
          <div className="stable-header-work-area">
            <div className="col-md-6">
              <span id="logo"><Link to="/">BMP</Link></span>
            </div>
            <div className="col-md-6">
              <div className="login-register_area">
                <button id="register-button" onClick={this.openAuthModal}>Register</button>
                <button id="signin-button" onClick={this.openAuthModal}>sign in</button>
              </div>
            </div>
          </div>
        </div>
        <div>

          <div>
            {this.state.showSignInModal ? <LoginPage closeModal={this.closeAuthModal}/> : ''}
            {this.state.showRegisterModal ? <RegisterPage closeModal={this.closeAuthModal}/> : ''}
          </div>

        </div>
      </div>
    );

  }
}

export default Header;
