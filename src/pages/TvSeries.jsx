import React,{useState,useEffect} from 'react';
import PageHeader from '../components/page-header/PageHeader';
import movie from '../assets/movies/movie';
import Helmet from '../components/Helmet/Helmet';
import '../styles/Catalog.css'
import MovieGrid from '../components/movie-grid/MovieGrid';

const TvSeries = () => {
  const [TVData,setTVData] = useState(movie)

  useEffect(()=>{
    const filteredTVData = movie.filter(item =>item.type === 'tv series');
    setTVData(filteredTVData)

  },[]);
  const handleFilter= (e) => {
    const filterValue = e.target.value;
    if (filterValue ==="All") {
      const filterMovieData = movie.filter((item)=> item.genera && item.type === "tv series");
      setTVData(filterMovieData) ;
    }
    if (filterValue ==="Horror") {
      const filterMovieData = movie.filter((item)=> item.genera === "Horror" && item.type === "tv series");
      setTVData(filterMovieData) ;
    }
    if (filterValue ==="Drama") {
      const filterMovieData =movie.filter((item)=> item.genera === "Drama" && item.type === "tv series");
      setTVData(filterMovieData) ;
    }
    if (filterValue ==="Action") {
      const filterMovieData =movie.filter((item)=> item.genera === "action" && item.type === "tv series");
      setTVData(filterMovieData) ;
    }
  }
  const handletype= (e) => {
    const filterValue = e.target.value;
    if (filterValue ==="All") {
      const filterMovieData = movie.filter((item)=> item.filter && item.type === "tv series");
      setTVData(filterMovieData) ;
    }
    if (filterValue ==="english-tv") {
      const filterMovieData = movie.filter((item)=> item.filter === "english-tv" && item.type === "tv series");
      setTVData(filterMovieData);
    }
    if (filterValue ==="turkish-tv") {
      const filterMovieData =movie.filter((item)=> item.filter === "turkish-tv" && item.type === "tv series");
      setTVData(filterMovieData) ;
    }
    if (filterValue ==="Action") {
      const filterMovieData =movie.filter((item)=> item.filter === "action" && item.type === "tv series");
      setTVData(filterMovieData) ;
    }
  }
  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    const searchedTVData = movie.filter(item =>item.name.toLowerCase().includes(searchTerm.toLowerCase()) && item.type ==='tv series')
    setTVData(searchedTVData);
  }
  return (
    <Helmet title='Tv-Series'>
        <PageHeader title='Tv-Series'/>
        <div className="movieGrid">
          <div className="container">
            <div className="input">
              <input type="text"placeholder='Enter Keyword' onChange={handleSearch} />
              <button type='submit' className='search'><i className='fa-solid fa-search'></i></button>
            </div>
          </div>
          <div class="box">
              <h4> </h4>
            <select onChange={handletype}>
              <option value='All'> جميع المسلسلات </option>
              <option value='english-tv'> مسلسلات اجنبي </option>
              <option value='turkish-tv'> مسلسلات تركي </option>
            </select>
          </div>
          <div class="box">
            <h4>  </h4>
            <select onChange={handleFilter}>
              <option value>No Filter</option>
              <option value='Action'> Action </option>
            </select>
          </div>
        </div>
        <section className='data'>
        <div className="container" style={{paddingTop:'40px',paddingBottom:'20px'}}>
          {
            TVData.length === 0 ?(<h1 className='heading-no-product' style={{textAlign:'center',margin:'70px 0'} }> لا يوجد نتائج </h1>): (<MovieGrid data={TVData}/>) 
          }
        </div>
      </section>
    </Helmet>
  );
}

export default TvSeries;
