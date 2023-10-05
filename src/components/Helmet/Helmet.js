import React from 'react';

const Helmet = (props) => {
  document.title = 'Movies4u-' + props.title;
  return (
    <div>
      {props.children}
    </div>
  );
}

export default Helmet;
