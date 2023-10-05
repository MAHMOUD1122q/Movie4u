import React from 'react';
import './Footer.css';

import { Link,NavLink } from 'react-router-dom';

import bg from '../../assets/footer-bg.jpg';
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <div className="footer" style={{backgroundImage: `url(${bg})`}}>
    <div className="container">
        <div className="footer__content__logo">
            <div className="logo">
                <img src={logo} alt="" />
                <Link to="/" className='title'>Movies4u</Link>
            </div>
        </div>
        <div className="menus">
        <ul className="menu">
        <li><NavLink to='/' className='link'> الرئيسية </NavLink></li>
        <li><NavLink to='/movie' className='link'> الافلام <i className='fa-solid fa-bottom-arrow'></i></NavLink></li>
        <li><NavLink to='/tv' className='link'> مسلسلات </NavLink></li>
        </ul>
        </div>
    </div>
    <div className="copyright">
      <p>© 2023 All Rights Reserved.<span><Link className='link' to='https://www.facebook.com/mody.ar.507'>Mahmoud تطوير </Link></span></p>
    </div>
</div>
);
}

export default Footer;
