import React from "react";

import LoginForm from "../../components/loginform/loginform.component";
import SignupForm from "../../components/signupform/signupform.component";
import "./loginPage.styles.css";


class LoginPage extends React.Component {
  render() {
    return (
      <div className="login-page">
       <h1>Customer Login</h1>
        <div className="loginform">
          <LoginForm />
        </div>
        <div className="signup-form">
          <SignupForm/>
        </div>
    
      </div>
    );
  }
}

export default LoginPage;
