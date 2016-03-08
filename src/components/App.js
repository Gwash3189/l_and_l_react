import React, { Component, cloneElement } from 'react';
import App from '../models/App';
import Category from '../models/Category';
import Note from '../models/Note';
import Sidebar from './Sidebar';
import get from 'lodash/get';
import { getFirstCategory, serialiseApp, loadApp } from './../helpers/app-helper';



export default class Main extends Component {

  constructor(props) {
    super(props);

    this.state = loadApp(new App(
      new Category('Some Notes',
        new Note('A Note', `a starter note with some pretty long content
        that will take up a bunch of space and cause it to get
        truncated, hopefully. Really, this is taking up a really big bit
        of space in my code base, so hopefully this should be long enough.`),
        new Note('One more note', `a starter note with some pretty long content
        that will take up a bunch of space and cause it to get
        truncated, hopefully. Really, this is taking up a really big bit
        of space in my code base, so hopefully this should be long enough.`),
        new Note('I lied, one more', `a starter note with some pretty long content
        that will take up a bunch of space and cause it to get
        truncated, hopefully. Really, this is taking up a really big bit
        of space in my code base, so hopefully this should be long enough.`)),
      new Category('More Notes',
        new Note('Another Note', 'a starter note about something else')
      )))
  }

  updateCategories(f) {
    this.setState({
      categories: f(this.state.categories)
    });
  }

  routedOrFirstCategory(categories, id) {
    return get(categories, id, getFirstCategory(categories))
  }

  componentDidUpdate(prevProps, prevState) {
    serialiseApp(prevState);
  }

  render() {
    return (
      <div className='container sidebar-left-push'>
          <div className='sidebar-container'>
            <Sidebar categories={this.state.categories} updateCategories={::this.updateCategories}/>
          </div>
          <div className='col-md-10 main-content-container'>
            {cloneElement(this.props.children, {
              category: this.routedOrFirstCategory(this.state.categories, this.props.params.cid),
              updateCategories: ::this.updateCategories
            })}
          </div>
      </div>
    );
  }
}
