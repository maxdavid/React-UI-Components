import React from 'react';
import './Button.scss';

const ActionButton = (props) => {
  return (
    <div className='action-button' onClick={props.onClick}>{props.text}</div>
  );
};

export default ActionButton;