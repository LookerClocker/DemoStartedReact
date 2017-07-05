import React, {PropTypes} from 'react';
import './Header.scss';
import LoginPage from '../auth/login/LoginPage';


class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showSignInModal: false
    };

    this.openLoginWindow = this.openLoginWindow.bind(this);
    this.closeLoginWindow = this.closeLoginWindow.bind(this);
  }

  openLoginWindow(event) {

    event.preventDefault();
    this.setState({
      showSignInModal: !this.state.showSignInModal
    });

    document.getElementsByClassName('overlay')[0].style.display = 'block';
  }

  closeLoginWindow(event) {

    event.preventDefault();
    this.setState({
      showSignInModal: !this.state.showSignInModal
    });

    document.getElementsByClassName('overlay')[0].style.display = 'none';
  }

  render() {

    document.getElementsByClassName('overlay')[0].onclick = (event) => {
      this.closeLoginWindow(event);
    };

    return (
      <div>
        <div className="row" id="top">
          <div className="col-md-6">
            <span id="logo">Be My Paparazzi!</span>
          </div>
          <div className="col-md-6">
            <div className="login-register_area">
              <button>Register</button>
              <button onClick={this.openLoginWindow}>sign in</button>
            </div>
          </div>
        </div>
        <div>
          {this.state.showSignInModal ? <LoginPage closeModal={this.closeLoginWindow}/> : ''}
        </div>
      </div>
    );

  }
}

export default Header;
