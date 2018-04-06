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
            <li>About us</li>
            <li>Press</li>
            <li>Policies</li>
            <li>Help</li>
          </ul>
        </div>
        <div className={ style.footerTopLinks }>
          <h5 className={ style.footerTopHeader }>Account</h5>
          <ul>
            <li>Edit Profile</li>
            <li>Friends</li>
            <li>Social</li>
            <li>Delete Profile</li>
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
            <li>Terms</li>
            <li>Privacy</li>
            <li>Site Map</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;