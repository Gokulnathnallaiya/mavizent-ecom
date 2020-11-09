import React from "react";
import "./Button.css";


const Button = ({ children, signup, onClick }) => {
  return <button onClick={onClick}className={signup ? "signup-btn" : "btn"}>{children}</button>;
};

export default Button;
