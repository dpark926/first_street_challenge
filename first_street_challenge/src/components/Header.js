import React from 'react';
import styles from '../styles/Header.scss';

function Header () {
  return (
    <header>
      <div>
        <h1>Header</h1>
        <div className={ styles.test }>test</div>
      </div>
    </header>
  )
}

export default Header;