import React from 'react';
import { Link } from 'react-router-dom';
import Contents from './Contents.js';
import style from '../styles/Banner.scss';

const Banner = () => {
  return (
    <section className={ style.banner }>
      <div>
        <h1 className={ style.bannerHeader }>{ Contents.BANNER_HEADING }</h1>
        <p>{ Contents.BANNER_SUBHEADING }</p>
        <Link to='/'>
          <button className={ style.mainButton }>{ Contents.BANNER_BUTTON }</button>
        </Link>
      </div>
    </section>
  )
}

export default Banner;