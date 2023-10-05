import React,{useState,useEffect} from 'react';
import HeroSlide from '../components/Hero-slide/HeroSlide';
import { Link } from 'react-router-dom';
import MovieList from '../components/movie-list/MovieList';
import Helmet from '../components/Helmet/Helmet';
import Movie from '../assets/movies/movie';
import '../styles/Home.css'
const Home = () => {

  const [movies,setMovies] = useState([])
  const [tv,setTv] = useState([])

  useEffect(()=>{
    const filteredmovies = Movie.filter(item =>item.type === 'movie');
    const filteredtv = Movie.filter(item =>item.type === 'tv series');
    setMovies(filteredmovies)
    setTv(filteredtv)

  },[]);
  return (
    <Helmet title='home'>
      <HeroSlide/>
      <div className="content">
                <div className="section">
                    <div className="section__header">
                        <h2> افلام جديدة </h2>
                        <Link to="/movie">
                            <button className="small"> مشاهده المزيد </button>
                        </Link>
                    </div>
                    <MovieList data={movies} />
                </div>

                <div className="section">
                    <div className="section__header">
                        <h2> مسلسلات جديدة </h2>
                        <Link to="/tv">
                            <button className="small"> مشاهده المزيد  </button>
                        </Link>
                    </div>
                    <MovieList data={tv}/>
                </div>
            </div>
    </Helmet>
  );
}

export default Home;
