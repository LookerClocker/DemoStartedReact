import React, {PropTypes} from 'react';

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="login-register_modal">
        <form className="user-login_form">
          <label className="bootstrapped-label">first name</label>
          <input id="user_first_name"type="text" />

          <label className="bootstrapped-label">last name</label>
          <input id="user_last_name"type="text" />

          <label className="bootstrapped-label">Enter your email</label>
          <input id="user_email" type="text" maxLength="40"/>

          <label className="bootstrapped-label">Create password</label>
          <input id="user_pass" type="password" maxLength="40"/>


          <input type="submit" className="submit_user-register_form" value="register"/>
        </form>

        <div className="social-media-buttons_header">
          <h6>
            <span>or use </span>
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


export default RegisterPage;
