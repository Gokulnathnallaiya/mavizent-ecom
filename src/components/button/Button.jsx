import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const  Button = ({children,signup}) =>{
  return (
    <Link to='sign-up'>
      <button className={signup?'signup-btn':'btn'}>{children
      }</button>
    </Link>
  );
}

export default Button
