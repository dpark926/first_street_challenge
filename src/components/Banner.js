import React from 'react';
import { Link } from 'react-router-dom';
import style from '../styles/Banner.scss';

function Banner () {
  return (
    <section className={ style.banner }>
      <div>
        <h1 className={ style.bannerHeader }>The world's greatest fake site</h1>
        <p>Create the world's greatest fake site and enjoy the breeze of fresh air when you complete it</p>
        <Link to='/'>
          <button className={ style.mainButton }>Do something awesome</button>
        </Link>
      </div>
    </section>
  )
}

export default Banner;