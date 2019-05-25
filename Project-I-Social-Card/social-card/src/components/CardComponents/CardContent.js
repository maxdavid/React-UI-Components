import React from 'react';
import './Card.scss';

const CardContent = () => {
  return (
    <div className='card-caption'>
      <div className='card-title'>Get started with React</div>
      <div className='card-description'>Yada whatevr</div>
      <div className='card-base-url'>reactjs.org</div>
    </div>
  );
};

export default CardContent;