import React,{useState,useEffect} from 'react';
import PageHeader from '../components/page-header/PageHeader';
import movie from '../assets/movies/movie';
import MovieGrid from '../components/movie-grid/MovieGrid';
import Helmet from '../components/Helmet/Helmet';
import '../styles/Catalog.css'


const Movies = () => {
  const [movieData,setMovieData] = useState(movie)
  useEffect(()=>{
    const filteredmovieData = movie.filter(item =>item.type === 'movie');
    setMovieData(filteredmovieData)

  },[]);

  const handleFilter= (e) => {
    const filterValue = e.target.value;
    if (filterValue ==="All") {
      const filterMovieData = movie.filter((item)=> item.genera && item.type === "movie");
      setMovieData(filterMovieData) ;
    }
    if (filterValue ==="Horror") {
      const filterMovieData = movie.filter((item)=> item.genera === "Horror" && item.type === "movie");
      setMovieData(filterMovieData) ;
    }
    if (filterValue ==="Drama") {
      const filterMovieData =movie.filter((item)=> item.genera === "Drama" && item.type === "movie");
      setMovieData(filterMovieData) ;
    }
    if (filterValue ==="Action") {
      const filterMovieData =movie.filter((item)=> item.genera === "action" && item.type === "movie");
      setMovieData(filterMovieData) ;
    }
  }
  const handletype= (e) => {
    const filterValue = e.target.value;
    if (filterValue ==="All") {
      const filterMovieData = movie.filter((item)=> item.filter && item.type === "movie");
      setMovieData(filterMovieData) ;
    }
    if (filterValue ==="english-film") {
      const filterMovieData = movie.filter((item)=> item.filter === "english-film" && item.type === "movie");
      setMovieData(filterMovieData);
    }
    if (filterValue ==="turkish-film") {
      const filterMovieData =movie.filter((item)=> item.filter === "turkish-film" && item.type === "movie");
      setMovieData(filterMovieData) ;
    }
    if (filterValue ==="Action") {
      const filterMovieData =movie.filter((item)=> item.filter === "action" && item.type === "movie");
      setMovieData(filterMovieData) ;
    }
  }
  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    const searchedMovieData = movie.filter(item =>item.name.toLowerCase().includes(searchTerm.toLowerCase()) && item.type ==='movie');
    setMovieData(searchedMovieData);
  }
  return (
    <Helmet title='Movies'>
        <PageHeader title='Movies'/>
        <div className="movieGrid">
          <div className="container">
            <div className="input">
              <input type="text"placeholder='Enter Keyword' onChange={handleSearch} />
              <button type='submit' className='search'><i className='fa-solid fa-search'></i></button>
            </div>
          </div>
            <div class="box">
            <select onChange={handletype}>
              <option value='All'> جميع الافلام </option>
              <option value='english-film'> افلام اجنبي </option>
              <option value='turkish-film'> افلام تركي </option>
            </select>
          </div>
          <div class="box">
            <select onChange={handleFilter}>
              <option value>no filter</option>
              <option value='Action'> Action </option>
            </select>
          </div>
        </div>
        <section className='data'>
        <div className="container" style={{paddingTop:'40px',paddingBottom:'20px'}}>
          {
            movieData.length === 0 ?(<h1 className='heading-no-product' style={{textAlign:'center',margin:'70px 0'} }> لا يوجد نتائج </h1>): (<MovieGrid data={movieData}/>) 
          }
        </div>
      </section>
    </Helmet>
  );
}

export default Movies;

