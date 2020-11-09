import React from "react";
import FormInput from "../input/customInput.component";
import Button from "../button/Button";
import "./loginform.styles.css";
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
