import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
// Components
import Splash from './components/Splash';
import Main from './components/Main';
import Footer from './components/Footer';
// CSS
import styles from './App.scss'
// Images
import headerImg from './assets/hero-image.png';

class App extends Component {
  render() {
    return (
      <div className={ styles.app }>
        <Splash />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default hot(module)(App);
