import React from 'react';
import headerStyles from '../styles/Header.css'

function Header () {
  return (
    <header>
      <h1>Header</h1>
      <div className={ headerStyles.test }>test</div>
    </header>
  )
}

export default Header;