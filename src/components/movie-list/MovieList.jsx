import React from 'react';
import './MovieList.css';

import { SwiperSlide, Swiper } from 'swiper/react';
import MovieCard from '../movie-card/MovieCard';


const MovieList = ({data}) => {
  return (
    <div className="movie-list">
    <Swiper
        grabCursor={true}
        spaceBetween={10}
        slidesPerView={'auto'}
    >
        {
            data?.map((item, i) => (
                <SwiperSlide key={i}>
                    <MovieCard item={item}/>
                </SwiperSlide>
            ))
        }
    </Swiper>
</div>
  );
}

export default MovieList;
