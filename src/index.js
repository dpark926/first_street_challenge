import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom'
import './index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Route path="/" component={ App }/>
  </BrowserRouter>,
  document.getElementById('root'));
registerServiceWorker();