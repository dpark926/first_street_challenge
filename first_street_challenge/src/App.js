import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
// Components
import Splash from './components/Splash';
import Main from './components/Main';
import Footer from './components/Footer';
// CSS
import style from './App.scss'

import jsonData from './videos.json';

class App extends Component {
  render() {
    console.log(jsonData);

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
