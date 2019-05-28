import React from 'react';
import './Button.scss'

import NumberButton from './NumberButton';
import ActionButton from './ActionButton';

const ButtonsContainer = () => {
  return (
    <div className='buttons'>
      <div className='button-row'>
        <NumberButton text='clear' />
        <ActionButton text='÷' />
      </div>
      <div className='button-row'>
        <NumberButton text='7' />
        <NumberButton text='8' />
        <NumberButton text='9' />
        <ActionButton text='×' />
      </div>
      <div className='button-row'>
        <NumberButton text='4' />
        <NumberButton text='5' />
        <NumberButton text='6' />
        <ActionButton text='–' />
      </div>
      <div className='button-row'>
        <NumberButton text='1' />
        <NumberButton text='2' />
        <NumberButton text='3' />
        <ActionButton text='+' />
      </div>
      <div className='button-row'>
        <NumberButton text='0' />
        <ActionButton text='=' />
      </div>
    </div>
  );
};

export default ButtonsContainer;