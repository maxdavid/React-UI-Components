import React from 'react';
import './Card.scss';

import CardBanner from './CardBanner';
import CardContent from './CardContent';

const CardContainer = () => {
  return (
    <a target="_blank" href='https://reactjs.org/'>
      <div className='card-container'>
        <CardBanner />
        <CardContent />
      </div>
    </a>
  );
};

export default CardContainer;