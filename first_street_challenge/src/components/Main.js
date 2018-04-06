import React from 'react';
import styles from '../styles/Main.scss';
import headerImg from '../assets/hero-image.png';

function Main () {
  return (
    <main>

      <img src={headerImg}></img>

      <h1>The world's greatest fake site</h1>
      <h4>Create the world's greatest fake site and enjoy the breeze of fresh air when you complete it</h4>
      <button>Do something awesome</button>
      <div className={ styles.test }>test</div>
    </main>
  )
}

export default Main;