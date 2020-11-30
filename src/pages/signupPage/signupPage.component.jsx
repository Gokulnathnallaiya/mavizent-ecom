import React from "react";

import SignUpForm from "../../components/signupform/signupform.component";
import SubscribeForm from "../../components/subscribeform/subcribeform.component";
import "./signupPage.styles.css";

class LoginPage extends React.Component {
  render() {
    return (
      <div className="signup-page">
        <h1>Create Account</h1>
        <div className="signupform">
          <SignUpForm />
        </div>
        <div className="subscribeform">
          <SubscribeForm />
        </div>
      </div>
    );
  }
}

export default LoginPage;
