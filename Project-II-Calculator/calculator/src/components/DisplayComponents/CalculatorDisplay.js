import React from 'react';
import './Display.scss';

const CalculatorDisplay = (props) => {
  return (
    <div className='display'>
      <div className='display-text'>{props.calcDisplay}</div>
    </div>
  );
};

export default CalculatorDisplay;

