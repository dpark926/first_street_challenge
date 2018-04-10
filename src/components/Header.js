import React from 'react';
import { Link } from 'react-router-dom';
import style from '../styles/Header.scss';
import logo from '../assets/logo.png';
import profilePic from '../assets/profile-pic.jpeg';

function Header () {
  return (
    <header>
      <nav className={ style.headerContainer }>
        <div className={ style.logoContainer }>
          <Link to='/'>
            <img src={ logo } alt='logo'></img>
          </Link>
        </div>
        <div className={ style.headerButton }>
          <i className="fas fa-align-justify"></i>
        </div>
        <div className={ style.linkContainer }>
          <ul>
            <Link to='/'>
              <li>Account</li>
            </Link>
            <Link to='/'>
              <li>Help</li>
            </Link>
          </ul>
        </div>
        <div className={ style.profileContainer }>
          <Link to='/'>
            <img src={ profilePic } className={ style.profilePicImg } alt='profile'></img>
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header;