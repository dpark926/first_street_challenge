import React from 'react';
import styles from '../styles/Header.scss'

function Header () {
  return (
    <header>
      <h1>Header</h1>
      <div className={ styles.test }>test</div>
    </header>
  )
}

export default Header;