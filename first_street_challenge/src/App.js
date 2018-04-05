import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Components
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

// CSS
import './styles/Header.css'
import './styles/Main.css'
import './styles/Footer.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
