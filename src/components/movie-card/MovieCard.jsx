import React from 'react';

import './MovieCard.css';

import { Link } from 'react-router-dom';

const MovieCard = ({item}) => {
  const link = '/' + item.name;
  return (
    <Link to={link}>
      <div className="movie-card"  style={{backgroundImage: `url(${item.imgUrl})`}}>
        <div className='overlay'></div>
          <i className="fa-solid fa-play"></i>
      </div>
      <h3>{item.name}</h3>
    </Link>
  );
}

export default MovieCard;
