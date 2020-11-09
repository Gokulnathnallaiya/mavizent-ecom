import React from "react";
import './customInput.styles.css';


const FormInput = ({placeholder, signup})=>{


    return (
        <input className={signup?"custom-input-signup":"custom-input"} placeholder={placeholder}>
        </input>
    )


}

export default FormInput;