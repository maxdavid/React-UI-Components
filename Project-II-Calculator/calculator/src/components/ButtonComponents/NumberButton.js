import React from 'react';
import './Button.scss';

const NumberButton = (props) => {
  return (
    <div className='number-button' onClick={props.onClick}>{props.text}</div>
  );
};

export default NumberButton;