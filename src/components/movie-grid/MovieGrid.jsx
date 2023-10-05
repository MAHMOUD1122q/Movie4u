import React from 'react';
import './MovieGrid.css';
import MovieCard from '../movie-card/MovieCard';

const MovieGrid = ({data}) => {
  return (
    <div className='movie-grid'>
        {
            data?.map((item, i) => (
              <div className="card" key={i}>
                <MovieCard item={item}/>
              </div>
            ))
        }
    </div>
  );
}

export default MovieGrid;
