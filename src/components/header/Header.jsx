import React,{ useRef, useEffect } from 'react';
import { NavLink, Link} from 'react-router-dom';
import logo from '../../assets/logo.png';
import './Header.css'
const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
      const shrinkHeader = () => {
          if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
              headerRef.current.classList.add('shrink');
          } else {
              headerRef.current.classList.remove('shrink');
          }
      }
      window.addEventListener('scroll', shrinkHeader);
      return () => {
          window.removeEventListener('scroll', shrinkHeader);
      };
  }, []);
  return (
    <>
      <div ref={headerRef} className="header">
            <div className="container">
                <div className="logo">
                    <img src={logo} alt="" />
                    <Link to="/" className='link'>Movies4u</Link>
                </div>
                <nav>
                    <li><NavLink to='/' className='link'> الرئيسية </NavLink></li>
                    <li><NavLink to='/movie' className='link'> الافلام <i className='fa-solid fa-bottom-arrow'></i></NavLink></li>
                    <li><NavLink to='/tv' className='link'> المسلسلات </NavLink></li>
                </nav>
            </div>
        </div>
    </>
  );
}

export default Header;
