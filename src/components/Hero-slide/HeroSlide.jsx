import React from 'react';

import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import{New} from '../../assets/movies/movie'

import './HeroSlide.css'


const HeroSlide = () => {
  return (
    <div>
        <Swiper
        modules={[Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{delay: 4000}}
      >
        {New.map(item => (
          <SwiperSlide> <div className="slider"   style={{backgroundImage: `url(${item.poster})`, backgroundSize:"cover"}}>
          <div className="container">
          <div className="text">
          <h1>
            {item.name}
          </h1>
          <p>{item.decs}</p>
            <div className="buttons">
              <Link to={'/' + item.name} className='btn'>Watch Now</Link>
              {/* <Link className='btn outline'>Watch trailer</Link> */}
            </div>
          </div>
          <div className="image">
            <img src={item.imgUrl} alt="" />
          </div>
          </div>
          </div> </SwiperSlide>
        ))}
      </Swiper>
    </div>
    );
  }

export default HeroSlide;
