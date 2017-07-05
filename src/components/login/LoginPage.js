import React, {PropTypes} from 'react';
import './LoginPage.scss';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="login-register_modal">
        <div className="menu-tabs">
          <div className="login-tab">sign in</div>
          <div className="register-tab">register</div>
        </div>
        <form className="user-login_form">
          <label className="bootstrapped-label">Enter your email</label>
          <input id="user_email" type="text" maxLength="40"/>

          <label className="bootstrapped-label">Enter your password</label>
          <input id="user-pass" type="password" maxLength="40"/>
          <a href="#" className="forgot-password_trigger">forgot password</a>

          <input type="submit" className="submit_user-login_form" value="sign in"/>
        </form>

        <div className="social-media-buttons_header">
          <h6>
            <span>or sign in with 1-click </span>
          </h6>
        </div>

        <div className="social-media-wrapper">
          <a className="element-center" href="#">facebook</a>
          <a className="element-center" href="#">google</a>
        </div>

        <hr/>
        <p className="terms-and-conditions">
          By logging into an account you are agreeing with our <a href="#">Terms and Conditions</a> and <a href="#">Privacy Statement.</a>
        </p>
      </div>
    );
  }

}

export default LoginPage;
