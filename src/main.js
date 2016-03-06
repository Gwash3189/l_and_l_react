import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './components/App';
import CategoryContainer from './components/CategoryContainer';
import NotesContainer from './components/NotesContainer';
import * as styles from './styles.css';

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={CategoryContainer} />
      <Route path='category/:cid' component={CategoryContainer}>
          <Route path='note/:nid' component={NotesContainer} />
      </Route>
    </Route>
  </Router>
);

ReactDOM.render(routes, document.getElementById('app'))
