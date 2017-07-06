import React, {PropTypes} from 'react';
import './LoginPage.scss';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="login_modal ">
        <div onClick={this.props.closeModal} className="pull-right close-login-modal-dialog">
          <span className="glyphicon glyphicon-remove"></span>
        </div>
        <form className="user-login_form">
          <label className="bootstrapped-label">Enter your email</label>
          <input id="user-email_login" type="text" maxLength="40"/>

          <label className="bootstrapped-label">Enter your password</label>
          <input id="user-pass_login" type="password" maxLength="40"/>
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
          By logging into an account you are agreeing with our <a href="#">Terms and Conditions</a> and <a href="#">Privacy
          Statement.</a>
        </p>
      </div>
    );
  }
}

export default LoginPage;

LoginPage.propTypes = {
  closeModal: PropTypes.func.isRequired
};
