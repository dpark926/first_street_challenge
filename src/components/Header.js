import React from 'react';
import style from '../styles/Header.scss';
import logo from '../assets/logo.png';
import profilePic from '../assets/profile-pic.jpeg';

function Header () {
  return (
    <header>
      <nav className={ style.headerContainer }>
        <div className={ style.logoContainer }>
          <a href='#'>
            <img src={ logo }></img>
          </a>
        </div>
        <div className={ style.headerButton }>
          <i class="fas fa-align-justify"></i>
        </div>
        <div className={ style.linkContainer }>
          <ul>
            <a href='#'>
              <li>Account</li>
            </a>
            <a href='#'>
              <li>Help</li>
            </a>
          </ul>
        </div>
        <div className={ style.profileContainer }>
          <a href='#'>
            <img src={ profilePic } className={ style.profilePicImg }></img>
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Header;