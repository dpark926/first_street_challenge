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
        <button className={ style.headerButton }>
          <span></span>
        </button>
        <div className={ style.linkContainer }>
          <ul>
            <li>Account</li>
            <li>Help</li>
          </ul>
        </div>
        <div className={ style.profileContainer }>
          <a href='#'>
            <img src={ profilePic } className={ style.profilePicImg }></img>
          </a>
        </div>
      </nav>

      {/* <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="#">
          <img src={ logo } width="30" height="30" class="d-inline-block align-top" ></img>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">Account</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Help</a>
            </li>
          </ul>
        </div>
        <div className="navbar-text">
          <a href='.'>
            <img src={ profilePic } width="30" height="30" class="d-inline-block align-top" ></img>
          </a>
        </div>
      </nav> */}
    </header>
  )
}

export default Header;