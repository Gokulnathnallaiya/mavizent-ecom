import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const  Button = ({children}) =>{
  return (
    <Link to='sign-up'>
      <button className='btn'>{children
      }</button>
    </Link>
  );
}

export default Button
