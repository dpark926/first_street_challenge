import React from 'react';
import styles from '../styles/Header.scss';
import logo from '../assets/logo.png';
import stockimage from '../assets/stockimage.png';

function Header () {
  return (
    <header>
      <div className={ styles.headerContainer }>
        <div className={ styles.logo }>
          <a href='.'>
            <img src={ logo }></img>
          </a>
        </div>
        <div>
          <ul>
            <li>Account</li>
            <li>Help</li>
          </ul>
        </div>

        <div className={ styles.logo }>
          <a href='.'>
            <img src={ logo }></img>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header;