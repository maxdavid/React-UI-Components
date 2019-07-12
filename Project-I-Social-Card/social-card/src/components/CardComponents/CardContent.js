import React from 'react';
import './Card.scss';

const CardContent = () => {
  return (
    <div className='card-caption'>
      <div className='card-title'>Get started with React</div>
      <div className='card-description'>React makes it painless to create interactive UIs. Design simple views for each state in your application.</div>
      <div className='card-base-url'>reactjs.org</div>
    </div>
  );
};

export default CardContent;