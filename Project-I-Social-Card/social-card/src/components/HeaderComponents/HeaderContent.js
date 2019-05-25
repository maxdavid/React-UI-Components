import React from 'react';
import './Header.scss';

import HeaderTitle from './HeaderTitle';

const HeaderContent = () => {
  return (
    <div className="header-content">
      <HeaderTitle />
      <span className='post-text'>
        My lifestyle is funky, and I want to plant a tree. We need backwards whipped cream, man. #slickbus #randomtweetMy lifestyle is funky, and I want to plant a tree. 
      </span>
    </div>
  )
}

export default HeaderContent;