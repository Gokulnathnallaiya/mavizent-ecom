import React from "react";
import FormInput from "../input/customInput.component";
import "./loginform.styles.css";
import Button from "../button/Button";
const LoginForm = () => {
  return (
    <div className="login-form">
      <p>EMAIL</p>
      <FormInput></FormInput>
      <p>PASSWORD</p>
      <FormInput></FormInput>
      <div className="login-button">
        <Button>LOGIN</Button>
      </div>
    </div>
  );
};

export default LoginForm;
