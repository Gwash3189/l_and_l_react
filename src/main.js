import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './components/App';
import CategoryContainer from './components/CategoryContainer';
import NotesContainer from './components/NotesContainer';
import * as styles from './styles.css';

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <Route path='category/:id' component={CategoryContainer}>
        <Route path='note/:id' component={NotesContainer}>
        </Route>
      </Route>
    </Route>
  </Router>
);

ReactDOM.render(routes, document.getElementById('app'))
