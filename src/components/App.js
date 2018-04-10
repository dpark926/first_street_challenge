import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
// Components
import Splash from './Splash';
import Main from './Main';
import Footer from './Footer';
// CSS
import style from '../styles/App.scss';

class App extends Component {
  render() {
    return (
      <div className={ style.app }>
        <Splash />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default hot(module)(App);
