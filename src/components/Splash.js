import React from 'react';
import Header from './Header';
import Banner from './Banner';
import style from '../styles/Splash.scss';

const Splash = () => {
  return (
    <div className={ style.splash }>
      <Header />
      <Banner />
    </div>
  )
}

export default Splash