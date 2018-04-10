import React from 'react';
import { Link } from 'react-router-dom';
import style from '../styles/Footer.scss';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className={ style.footerContainer }>
      <div className={ style.footerTop }>
        <div className={ style.footerTopLinks }>
          <h5 className={ style.footerTopHeader }>Fakesite</h5>
          <ul>
            <Link to='/'>
              <li>About us</li>
            </Link>
            <Link to='/'>
              <li>Press</li>
            </Link>
            <Link to='/'>
              <li>Policies</li>
            </Link>
            <Link to='/'>
              <li>Help</li>
            </Link>
          </ul>
        </div>
        <div className={ style.footerTopLinks }>
          <h5 className={ style.footerTopHeader }>Account</h5>
          <ul>
            <Link to='/'>
              <li>Edit Profile</li>
            </Link>
            <Link to='/'>
              <li>Friends</li>
            </Link>
            <Link to='/'>
              <li>Social</li>
            </Link>
            <Link to='/'>
              <li>Delete Profile</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className={ style.footerBottom }>
        <div className={ style.logoContainer }>
          <Link to='/'>
            <img src={ logo } alt='logo'></img>
          </Link>
        </div>
        <div className={ style.linkContainer }>
          <ul>
            <Link to='/'>
              <li>Terms</li>
            </Link>
            <Link to='/'>
              <li>Privacy</li>
            </Link>
            <Link to='/'>
              <li>Site Map</li>
            </Link>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;