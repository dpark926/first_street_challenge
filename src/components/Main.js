import React from 'react';
import style from '../styles/Main.scss';
import stockImg from '../assets/stockimage.png';
import jsonData from '../videos.json';

function Main () {
  const videos = jsonData.map( video => {
    return (
      <article className={ style.mainTop } key={ video.id }>
        <div className={ style.mainTopLeft }>
          <a href={ video.url } target='_blank'>
            <h2 className={ style.mainTopHeader }>{ video.title }</h2>
          </a>
          <a href={ video.url } target='_blank'>
            <p className={ style.mainTopPara } dangerouslySetInnerHTML={{ __html: video.description }}></p>
          </a>
        </div>
        <figure className={ style.mainTopRight }>
          <div>
            <a href={ video.url } target='_blank'>
              <picture>
                <source type='image/webp' srcSet={ video.thumbnail_large } />
                <source type='image/jpg' srcSet={ video.thumbnail_large.slice(0, -4).concat('jpeg') } />
                <img src={ video.thumbnail_large.slice(0, -4).concat('jpeg') } alt={ video.title }></img>
              </picture>
            </a>
          </div>
        </figure>
      </article>
    )
  })

  return (
    <main className={ style.mainContainer }>
      <article className={ style.mainTop }>
        <div className={ style.mainTopLeft }>
          <a href='#'>
            <h2 className={ style.mainTopHeader }>Video Title (from videos.json)</h2>
          </a>
          <a href='#'>
            <p className={ style.mainTopPara }>Video Description (from videos.json)</p>
          </a>
        </div>
        <figure className={ style.mainTopRight }>
          <a href='#'>
            <img src={ stockImg } alt='video'></img>
          </a>
        </figure>
      </article>
      { videos }
      <div className={ style.mainBottom }>
        <h2>Ready to have your cake and eat it too?</h2>
        <p>Start by designing the experience you have in mind. We'll guide you through each step. If your experience meets the quality standards, you'll hear more about what's next.</p>
      </div>
    </main>
  )
}

export default Main;