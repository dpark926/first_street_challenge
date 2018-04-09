import React from 'react';
import style from '../styles/Footer.scss';
import logo from '../assets/logo.png';

function Footer () {
  return (
    <footer className={ style.footerContainer }>
      <div className={ style.footerTop }>
        <div className={ style.footerTopLinks }>
          <h5 className={ style.footerTopHeader }>Fakesite</h5>
          <ul>
            <a href='#'>
              <li>About us</li>
            </a>
            <a href='#'>
              <li>Press</li>
            </a>
            <a href='#'>
              <li>Policies</li>
            </a>
            <a href='#'>
              <li>Help</li>
            </a>
          </ul>
        </div>
        <div className={ style.footerTopLinks }>
          <h5 className={ style.footerTopHeader }>Account</h5>
          <ul>
            <a href='#'>
              <li>Edit Profile</li>
            </a>
            <a href='#'>
              <li>Friends</li>
            </a>
            <a href='#'>
              <li>Social</li>
            </a>
            <a href='#'>
              <li>Delete Profile</li>
            </a>
          </ul>
        </div>
      </div>
      <div className={ style.footerBottom }>
        <div className={ style.logoContainer }>
          <a href='#'>
            <img src={ logo }></img>
          </a>
        </div>
        <div className={ style.linkContainer }>
          <ul>
            <a href='#'>
              <li>Terms</li>
            </a>
            <a href='#'>
              <li>Privacy</li>
            </a>
            <a href='#'>
              <li>Site Map</li>
            </a>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;