import React from 'react';
import './Header.scss';
const moment = require('moment');

const HeaderTitle = () => {
  return (
    <div className='header-title'>
      <span className='display-name'>
        Lambda School
      </span>
      <span className='post-meta'>
        @LambdaSchool · {moment().format("MMM Do YY")}
      </span>
    </div>
  );
};

export default HeaderTitle;