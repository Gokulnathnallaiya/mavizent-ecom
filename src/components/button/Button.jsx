import React from "react";
import "./Button.css";


const Button = ({ children, fullwidth, onClick }) => {
  return <button onClick={onClick}className={fullwidth ? "signup-btn" : "btn"}>{children}</button>;
};

export default Button;
