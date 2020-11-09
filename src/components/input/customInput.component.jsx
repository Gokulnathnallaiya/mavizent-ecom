import React from "react";
import "./customInput.styles.css";

const FormInput = ({ placeholder, signup, onChange, name,type,value ,...otherprops}) => {
  return (
    <input
      name={name}
      type={type}
      onChange={onChange}
      className={signup ? "custom-input-signup" : "custom-input"}
      placeholder={placeholder}
      value={value}
      {...otherprops}
    ></input>
  );
};

export default FormInput;
