import React from 'react';
import './Button.scss'

import NumberButton from './NumberButton';
import ActionButton from './ActionButton';

const ButtonsContainer = (props) => {
  return (
    <div className='buttons'>
      <div className='button-row'>
        <NumberButton onClick={props.whenClicked} text='clear' />
        <ActionButton onClick={props.whenClicked} text='÷' />
      </div>
      <div className='button-row'>
        <NumberButton onClick={props.whenClicked} text='7' />
        <NumberButton onClick={props.whenClicked} text='8' />
        <NumberButton onClick={props.whenClicked} text='9' />
        <ActionButton onClick={props.whenClicked} text='×' />
      </div>
      <div className='button-row'>
        <NumberButton onClick={props.whenClicked} text='4' />
        <NumberButton onClick={props.whenClicked} text='5' />
        <NumberButton onClick={props.whenClicked} text='6' />
        <ActionButton onClick={props.whenClicked} text='–' />
      </div>
      <div className='button-row'>
        <NumberButton onClick={props.whenClicked} text='1' />
        <NumberButton onClick={props.whenClicked} text='2' />
        <NumberButton onClick={props.whenClicked} text='3' />
        <ActionButton onClick={props.whenClicked} text='+' />
      </div>
      <div className='button-row'>
        <NumberButton onClick={props.whenClicked} text='0' />
        <ActionButton onClick={props.whenClicked} text='=' />
      </div>
    </div>
  );
};

export default ButtonsContainer;