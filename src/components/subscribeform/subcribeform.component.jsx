import React from "react";
import FormInput from "../input/customInput.component";
import Button from "../button/Button";
import "./subscribeform.styles.css"


const SignUpForm = () => {
  return (
    <div className="signup-form">
      <h4>Be part of our extraordinary journey</h4>
      <h5>Sign up to receive 10% off your first purchase</h5>
     
      <FormInput signup placeholder="Full Name"></FormInput>
      <FormInput signup placeholder="Email"></FormInput>
      
      <div className="loginbutton">
        <Button signup> Sign Up</Button>
      </div>
    </div>
  );
};

export default SignUpForm;
