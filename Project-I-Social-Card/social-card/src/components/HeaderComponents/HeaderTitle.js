import React from 'react';
import './Header.scss';

const HeaderTitle = () => {
  return (
    <div className='header-title'>
      <span className='display-name'>
        Lambda School
      </span>
      <span className='post-meta'>
        @LambdaSchool · Jan 26 2019
      </span>
    </div>
  );
};

export default HeaderTitle;