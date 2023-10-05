import React, {useRef,useState} from 'react';
import { useParams,Link } from 'react-router-dom';
import movie from '../assets/movies/movie';
import MovieList from '../components/movie-list/MovieList';
import Helmet from '../components/Helmet/Helmet';
import '../styles/Details.css'

const Details = () => {
  const {name} = useParams()
const movies = movie.find(item => item.name === name)
  const {imgUrl,poster, decs ,year, category,filter,video,trailer, season, download360,downloadName360,download480,downloadName480,download720,downloadName720 , type , genera,cast} = movies
  const iframeRef = useRef(null);
  const [videotab,setvideotab] = useState(1)
  const [tab,setTab] = useState(1)
  const relatedmovie =movie.filter((item)=>item.type === type && item.genera === genera && item.name !== name && item.filter === filter)
  return (
    <Helmet title={name}>
      <section className='movie-content'>
        <div className="banner" style={{backgroundImage:`url(${poster})`}}></div>
        <div className='over'></div>
        <div className="movie-container">
          <div className="movie-content-poster">
              <img src={imgUrl} alt="" style={{width:'300px',height:'450px' ,borderRadius:'10px'}} />
          </div>
          <div className="movie-content">
            <h1 className="title">
                {name}
                <span>({year})</span>
            </h1>
            <div className="genres">
              {
                  category.map((genre, i) => (
                      <span key={i} className="genres-item">{genre.name}</span>
                  ))
              }
            </div>
            <p className="overview">{decs}</p>
            <div className="cast">
              <h2 className='cast-title'>Casts</h2>
              <div className="casts">
                {
                  cast.map((item, i) => (
                    <div key={i} className="casts-item">
                        <img src={item.imgUrl} alt="" style={{width:'138px',height:'175px'}}/>
                        <p className="casts-item-name">{item.name}</p>
                        <p className="casts-item-filmame">{item.filmName}</p>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='trailer'>
      <div className="trailer-container">
        <div className="trailer__title">
            <h2>{`مشاهدة اعلان ${name}`}</h2>
        </div>
          <iframe
              src={trailer}
              ref={iframeRef}
              width="800" height="400"
              title="video"
              allowFullScreen
          ></iframe>
      </div>
      </section>
      <section className='video'>
        {
          type === 'tv series'?
            season.map((item, i) =>(
              <>
              {
                type === "tv series"&& tab === i + 1 ? item.episodes.map((item, i) =>(
                <>
                {
                    type === "tv series" && videotab === i + 1 ?
              <div className="watch-video">
                  <div className="video__title">
                      <h2>{`مشاهده  ${item.name}`}</h2>
                  </div>
                  <iframe
                      src={item.link}
                      ref={iframeRef}
                      width="800" height="400"
                      title="video"
                      allowFullScreen
                  ></iframe>
              </div> :''
                }
                </>
                )):""
              }
              </>
            ))
          :
          <div className="movie-video" style={{textAlign:'center',padding:'0'}}>
              <div className="movie__title">
                  <h2>{`Watch from here ${name}`}</h2>
              </div>
              <iframe
                  src={video}
                  ref={iframeRef}
                  width="800" height="400"
                  title="video"
                  allowFullScreen
              ></iframe>
          </div>
        }
        {
          type === 'tv series'?
            season.map((item, i) =>(
              <>
                {
                  type === "tv series"&& tab === i + 1 ? 
                <div className='seasons-download'>
                  <h2>{item.name} تحميل </h2>
                    <button><Link style={item.downloadName360 === '' ? {display:'none'} : {display:''}} className='link' to={item.download360}>{item.downloadName360}</Link></button>
                    <button><Link style={item.downloadName480 === '' ? {display:'none'} : {display:''}} className='link' to={item.download480}>{item.downloadName480}</Link></button>
                    <button><Link style={item.downloadName720 === '' ? {display:'none'} : {display:''}} className='link' to={item.download720}>{item.downloadName720}</Link></button>
                </div>:''
                }
              </>
            ))
          :<div className='download'>
            <h2>{name} تحميل </h2>
              <button><Link style={downloadName360 === '' ? {display:'none'} : {display:''}} className='link' to={download360}>{downloadName360}</Link></button>
              <button><Link style={downloadName480 === '' ? {display:'none'} : {display:''}} className='link' to={download480}>{downloadName480}</Link></button>
              <button><Link style={downloadName720 === '' ? {display:'none'} : {display:''}} className='link' to={download720}>{downloadName720}</Link></button>
          </div>
        }
        <div className="episode-d">
        {
          type === 'tv series'?
            season.map((item, i) =>(
              <>
              {
                type === "tv series"&& tab === i + 1 ? item.episodes.map((item, i) =>(
                <>
                {
                  videotab === i + 1 ?
                    <div className="download-episode">
                      <h2>تحميل {item.name} </h2>
                    <button><Link style={item.downloadName360 === '' ? {display:'none'} : {display:''}} className='link' to={item.download360}>{item.downloadName360}</Link></button>
                    <button><Link style={item.downloadName480 === '' ? {display:'none'} : {display:''}} className='link' to={item.download480}>{item.downloadName480}</Link></button>
                    <button><Link style={item.downloadName720 === '' ? {display:'none'} : {display:''}} className='link' to={item.download720}>{item.downloadName720}</Link></button>
                    </div> 
                  :''
                }
                </>
                )):""
              }
              </>
            ))
          :''
          }
        </div>
          {
          type === 'tv series'?
            season.map((item, i) =>(
              <div className='seasons'>
                <button className={`seasons-btn ${tab === i + 1? 'active-tab' :''}`} key={i} onClick={()=>setTab(i + 1)} style={{cursor:'pointer'}}>{item.name}</button>
              </div>
            ))
          :''
        }
        <div className="episode">
        {
          type === 'tv series'?
            season.map((item, i) =>(
              <>
              {
                type === "tv series"&& tab === i + 1 ? item.episodes.map((item, i) =>(
                <>
                <div className="episode-buttons">
                  <button className={`episode-btn ${videotab === i + 1? 'active-tab-video' :''}`}  key={i} onClick={()=>setvideotab(i + 1)} style={{backgroundColor:'transparent',marginBottom:'10px'}}>
                  <img src={item.img} key={i} onClick={()=>setvideotab(i + 1)} style={{backgroundColor:'transparent',width:'227px',height:'127px',cursor:'pointer'}} alt="" />
                    <span style={{width:'227px',cursor:'pointer',color:'red',fontSize:'19px'}}>{item.name}</span>
                    </button>
                </div>
                </>
                )):""
              }
              </>
            ))
          :''
          }
        </div>
      </section>
      <section className='smilier'>
      <div className="section" style={{marginBottom:'30px'}}>
                  <div className="section__header">
                      <h2>مشابهة </h2>
                  </div>
                  <MovieList data={relatedmovie}/>
              </div>
      </section>
    </Helmet>
  );
}
export default Details;
