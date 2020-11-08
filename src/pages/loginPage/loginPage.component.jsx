import React from "react";

import LoginForm from "../../components/loginform/loginform.component";
import "./loginPage.styles.css";


class LoginPage extends React.Component {
  render() {
    return (
      <div className="login-page">
       <h1>Customer Login</h1>
        <div className="form">
          <LoginForm />
        </div>
    
      </div>
    );
  }
}

export default LoginPage;
