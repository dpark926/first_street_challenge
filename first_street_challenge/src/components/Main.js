import React from 'react';
import style from '../styles/Main.scss';
import stockImg from '../assets/stockimage.png';

function Main () {
  return (
    <main className={ style.mainContainer }>
      <article className={ style.mainTop }>
        <div className={ style.mainTopLeft }>
          <h2 className={ style.mainTopHeader }>Video Title (from videos.json)</h2>
          <p className={ style.mainTopPara }>Video Description (from videos.json)</p>
        </div>
        <figure className={ style.mainTopRight }>
          <a href='#'>
            <div>
              <img src={ stockImg }></img>
            </div>
          </a>
        </figure>
      </article>
      <div className={ style.mainBottom }>
        <h2>Ready to have your cake and eat it too?</h2>
        <p>Start by designing the experience you have in mind. We'll guide you through each step. If your experience meets the quality standards, you'll hear more about what's next.</p>
      </div>
    </main>
  )
}

export default Main;