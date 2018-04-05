import React, { Component } from 'react';
import './App.css';

// Components
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

// CSS
import appStyles from './App.css'

class App extends Component {
  render() {
    return (
      <div className={ appStyles.app }>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
