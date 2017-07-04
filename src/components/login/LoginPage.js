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
        <form className="user-login_form">
          <label className="bootstrapped-label">Enter your email</label>
          <input id="user_email" type="text" maxLength="40"/>

          <label className="bootstrapped-label">Enter your password</label>
          <input id="user-pass" type="password" maxLength="40"/>
          <a href="#" className="forgot-password_trigger">forgot password</a>

          <input type="submit" className="submit_user-login_form" value="sign in"/>
        </form>

        <h6><span>or sign in with 1-click </span></h6>

        <div className="social-media-wrapper">
          <a className="element-center" href="#">facebook</a>
          <a className="element-center" href="#">google</a>
        </div>

      </div>
    );
  }

}

export default LoginPage;
