import React, {PropTypes} from 'react';
import './RegisterPage.scss';

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="register_modal">
        <div onClick={this.props.closeModal} className="pull-right close-register-modal-dialog">
          <span className="glyphicon glyphicon-remove"></span>
        </div>
        <form className="user-register_form">
          <div className="user-first-name">
            <label className="bootstrapped-label">First name</label>
            <input id="user_first-name_register" type="text"/>
          </div>
          <div className="user-last-name">
            <label className="bootstrapped-label">Last name</label>
            <input id="user_last-name_register" type="text"/>
          </div>


          <label className="bootstrapped-label">Enter your email</label>
          <input id="user-email_register" type="text" maxLength="40"/>

          <label className="bootstrapped-label">Create password</label>
          <input id="user-pass_register" type="password" maxLength="40"/>


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
          By having into an account you are agreeing with our <a href="#">Terms and Conditions</a> and <a href="#">Privacy
          Statement.</a>
        </p>
      </div>
    );
  }
}

export default RegisterPage;

RegisterPage.propTypes = {
  closeModal: PropTypes.func.isRequired
};

