import React from 'react';
import './Header.scss';

import HeaderTitle from './HeaderTitle';

const HeaderContent = () => {
  return (
    <div className="header-content">
      <HeaderTitle />
      <span className='post-text'>
        My lifestyle is funky, and I want to plant a tree. We need backwards whipped cream, man. Don't mess with the best unless you're the best. #bitcoin #randomtweet
      </span>
    </div>
  )
}

export default HeaderContent;