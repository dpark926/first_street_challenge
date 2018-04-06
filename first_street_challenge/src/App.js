import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
// import './App.scss';

// Components
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

// CSS
import styles from './App.scss'

class App extends Component {
  render() {
    return (
      <div className={ styles.app }>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default hot(module)(App);
