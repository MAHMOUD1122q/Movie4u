import React from 'react';

import './PageHeader.css';


import bg from '../../assets/footer-bg.jpg';

const PageHeader = ({title}) => {
  return (
    <div className="page-header" style={{backgroundImage: `url(${bg})`}}>
    <h2>{title}</h2>
  </div>
  );
}

export default PageHeader;
